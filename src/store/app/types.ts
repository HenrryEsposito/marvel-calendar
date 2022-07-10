export interface IAppStore {
  appStep: appStep;
}

export enum appStep {
  SPLASH = "SPLASH",
  AUTHORIZED = "AUTHORIZED",
}
