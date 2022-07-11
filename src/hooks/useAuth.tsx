import useLocalStorage from "./useLocalStorage";
import useDateUtils from "./useDateUtils";
import { v4 as uniqueId } from "uuid";
import { useSelector, useDispatch } from "react-redux";

import { rootStore } from "../store/";
import { actionType as userActionType } from "../store/user/actions";
import { actionType as appActionType } from "../store/app/actions";
import { appStep } from "../store/app/types";

export interface IUser {
  id: string;
  login: string;
  name: string;
  token: string;
}

export default function useAuth() {
  const { cloneDate, today } = useDateUtils();
  const { getItem, setItem } = useLocalStorage();
  const dispatch = useDispatch();

  const store = useSelector((state: rootStore) => state);

  function generateToken(
    name: string,
    login: string,
    password: string
  ): string {
    return name + login + password;
  }

  function findUserByLogin(login: string): IUser | void {
    const userlist: IUser[] = getItem("UserList", []);

    if (userlist.length)
      return userlist.find((user: IUser) => user.login === login);

    return;
  }

  function findUserByToken(token: string): IUser | void {
    const userlist: IUser[] = getItem("UserList", []);

    if (userlist.length)
      return userlist.find((user: IUser) => user.token === token);

    return;
  }

  function register(name: string, login: string, password: string) {
    if (findUserByLogin(login))
      return alert("Já existe um usuário com esse email!");

    const userList: IUser[] = getItem("UserList", []);
    const newToken = generateToken(name, login, password);

    const newUser = {
      id: uniqueId(),
      login: login,
      name: name,
      token: newToken,
    };

    userList.push(newUser);

    setItem("UserList", userList);

    alert("Registrado com sucesso!");

    persistLogin(newUser);
  }

  function logIn(login: string, password: string) {
    const userByLogin = findUserByLogin(login);

    if (userByLogin) {
      const token = generateToken(userByLogin.name, login, password);
      const userByToken = findUserByToken(token);

      if (userByToken) {
        persistLogin(userByToken);
        return;
      }
    }

    return alert("Senha e/ou login incorretos!");
  }

  function logOut() {
    setItem("CurrentUser", {});
    dispatch({
      type: appActionType.SET_CURRENT_STEP,
      payload: appStep.SPLASH,
    });
  }

  function refreshLogin() {
    const currentUser = getItem("CurrentUser", null);

    if (!currentUser) return;

    const currentUserTokenExpiration = new Date(currentUser.tokenExpiration);

    const expired = currentUserTokenExpiration.getTime() - today.getTime();

    if (expired < 0) setItem("CurrentUser", null);

    dispatch({
      type: appActionType.SET_CURRENT_STEP,
      payload: appStep.AUTHORIZED,
    });
  }

  function persistLogin(user: IUser) {
    dispatch({ type: userActionType.SET_CURRENT_USER, payload: user });

    dispatch({
      type: appActionType.SET_CURRENT_STEP,
      payload: appStep.AUTHORIZED,
    });

    const expirationDate = cloneDate(today).setDate(today.getDate() + 1);

    setItem("CurrentUser", {
      token: user.token,
      tokenExpiration: expirationDate,
    });
  }

  return {
    logIn,
    refreshLogin,
    logOut,
    register,
    findUserByToken,
    findUserByLogin,
    generateToken,
  };
}
