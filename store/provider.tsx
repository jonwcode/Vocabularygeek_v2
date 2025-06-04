"use client";
import React, { useState, ReactNode, useEffect, useRef } from "react";
import useMedia from "@/hooks/useMedia";
import InitLoads from "@/initLoads";
import Loading from "@/components/loading";
import Context from "@/store/context";
import { type appReady, type deviceInfo } from "@/types/store";

export default function Provider({ children }: { children: ReactNode }) {
  const [appReady, setAppReady] = useState<appReady>({
    theme: false,
    deviceName: false,
    loading: true,
  });
  const [deviceInfo, setDeviceInfo] = useState<deviceInfo>(null);
  const [loginStatus, setLoginStatus] = useState<boolean | null>(null);

  const media = useMedia();

  const mediaQueryDevice = media({
    mobile: "(max-width: 767px)",
    tablet: "(min-width: 768px) and (max-width: 1199px)",
    desktop: "(min-width: 1200px) and (max-width: 1599px)",
    uhd: "(min-width: 1600px)",
  });

  useEffect(() => {
    setDeviceInfo((prev) => {
      return { ...prev, deviceName: mediaQueryDevice };
    });
  }, [mediaQueryDevice]);

  useEffect(() => {
    if (appReady.theme) {
      setAppReady((prev) => ({ ...prev, loading: false }));
      console.log("Goes here");
    }
  }, [appReady.theme]);

  return (
    <div>
      <Context.Provider
        value={{
          loginStatus,
          setLoginStatus,
          deviceInfo,
          appReady,
          setAppReady,
        }}
      >
        {!appReady.loading ? (
          children
        ) : (
          <React.Fragment>
            <InitLoads />
            <Loading />
          </React.Fragment>
        )}
      </Context.Provider>
    </div>
  );
}
