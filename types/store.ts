import { FC } from "react";

export type deviceNames =
  | "tiny"
  | "mobile"
  | "tablet"
  | "desktop"
  | "uhd"
  | null;

export type deviceType =
  | "Phone"
  | "Tablet"
  | "TV"
  | "Desktop"
  | "Browser"
  | "unknown"
  | null;

export type osName =
  | "Android"
  | "iOS"
  | "iPadOS"
  | "Windows"
  | "MacOS"
  | "Linux"
  | "Unknown"
  | null;

export type appReady = {
  loading: boolean;
  deviceName: boolean;
  theme: boolean;
};

export type appReadyDispatch = React.Dispatch<React.SetStateAction<appReady>>;

export type deviceInfo = {
  deviceName?: deviceNames;
  deviceType?: deviceType;
  osName?: osName;
  osBuildId?: string | null;
} | null;
