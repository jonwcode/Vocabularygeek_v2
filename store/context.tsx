import React, { createContext } from "react";
import {
  type deviceInfo,
  type appReady,
  type appReadyDispatch,
} from "@/types/store";

type contextType = {
  deviceInfo: deviceInfo;
  loginStatus: boolean | null;
  setLoginStatus: React.Dispatch<React.SetStateAction<boolean | null>>;
  setAppReady: appReadyDispatch;
  appReady: appReady;
};

const Context = createContext<contextType>({
  deviceInfo: {
    deviceType: null,
    osBuildId: null,
    osName: null,
  },
  loginStatus: null,
  setLoginStatus: () => {},
  setAppReady: () => {},
  appReady: {
    loading: false,
    theme: false,
    deviceName: false,
  },
});

export default Context;
