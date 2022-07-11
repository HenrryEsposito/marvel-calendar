import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Calendar from "./components/organisms/Calendar";
import Splash from "./components/organisms/Splash";

import { rootStore } from "./store";
import { appStep } from "./store/app/types";

import useAuth from "./hooks/useAuth";

import { EventModalContextProvider } from "./contexts/EventModal/Provider";

function App() {
  const { refreshLogin } = useAuth();

  useEffect(() => {
    refreshLogin();
  }, []);

  const currentAppStep = useSelector(
    (state: rootStore) => state.appStore.appStep
  );

  return (
    <div className="App">
      <EventModalContextProvider>
        {currentAppStep === appStep.AUTHORIZED ? <Calendar /> : <Splash />}
      </EventModalContextProvider>
    </div>
  );
}

export default App;
