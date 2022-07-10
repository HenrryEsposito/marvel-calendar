import { createStore } from "@reduxjs/toolkit";
import { IAction } from "../";
import { IAppStore, appStep } from "./types";
import { actionType } from "./actions";

const INITIAL_STATE: IAppStore = { appStep: appStep.SPLASH };

function appReducer(state = INITIAL_STATE, action: IAction) {
  switch (action.type) {
    case actionType.SET_CURRENT_STEP:
      return { ...state, appStep: action.payload };

    default:
      return state;
  }
}

const store = createStore(appReducer);

export default store;
