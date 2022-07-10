import React from "react";
import { useSelector } from "react-redux";

import Calendar from "./components/organisms/Calendar";
import Splash from "./components/organisms/Splash";

import { IAppStore } from "./store/app/types";
import { appStep } from "./store/app/types";

function App() {
  const currentAppStep = useSelector((state: IAppStore) => state.appStep);

  return (
    <div className="App">
      {currentAppStep === appStep.AUTHORIZED ? <Calendar /> : <Splash />}
    </div>
  );
}

export default App;
