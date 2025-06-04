"use client";
import React, { useState, ReactNode, useEffect } from "react";
import useMedia from "@/hooks/useMedia";
import Loading from "@/components/loading";
import Context from "@/store/context";
import { type appReady, type deviceInfo } from "@/types/store";

export default function Provider({ children }: { children: ReactNode }) {
  const [appReady, setAppReady] = useState<appReady>({ loading: true });
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
    console.log("Going here", mediaQueryDevice);
    setDeviceInfo((prev) => {
      return { ...prev, deviceName: mediaQueryDevice };
    });
  }, [mediaQueryDevice]);

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
        {appReady ? children : <Loading />}
      </Context.Provider>
    </div>
  );
}
