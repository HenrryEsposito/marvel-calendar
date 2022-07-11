export interface IUserStore {
  currentUserInfo: IUserInfo;
}

export interface IUserInfo {
  id: string;
  login: string;
  name: string;
  token: string;
}
