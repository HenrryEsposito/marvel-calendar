import { IAction } from "../";
import { IAppStore, appStep } from "./types";
import { actionType } from "./actions";

const INITIAL_STATE: IAppStore = { appStep: appStep.SPLASH };

export function appReducer(state = INITIAL_STATE, action: IAction) {
  switch (action.type) {
    case actionType.SET_CURRENT_STEP:
      return { ...state, appStep: action.payload };

    default:
      return state;
  }
}
