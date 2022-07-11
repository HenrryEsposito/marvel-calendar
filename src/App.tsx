import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Calendar from "./components/organisms/Calendar";
import Splash from "./components/organisms/Splash";

import { rootStore } from "./store";
import { appStep } from "./store/app/types";

import useLocalStorage from "./hooks/useLocalStorage";
import useAuth from "./hooks/useAuth";

function App() {
  const { setItem, getItem } = useLocalStorage();
  const { refreshLogin } = useAuth();

  useEffect(() => {
    refreshLogin();
  }, []);

  const currentAppStep = useSelector(
    (state: rootStore) => state.appStore.appStep
  );

  return (
    <div className="App">
      {currentAppStep === appStep.AUTHORIZED ? <Calendar /> : <Splash />}
    </div>
  );
}

export default App;
