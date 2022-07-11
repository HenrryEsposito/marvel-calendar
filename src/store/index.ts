import { createStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

import { userReducer } from "./user/reducers";
import { appReducer } from "./app/reducers";
import { eventReducer } from "./event/reducers";

import { IUserStore } from "./user/types";
import { IAppStore } from "./app/types";
import { IEventStore } from "./event/types";

export interface IAction {
  type: any;
  payload: any;
}

export interface rootStore {
  userStore: IUserStore;
  appStore: IAppStore;
  eventStore: IEventStore;
}

const store = createStore(
  combineReducers({
    userStore: userReducer,
    appStore: appReducer,
    eventStore: eventReducer,
  })
);

export default store;
