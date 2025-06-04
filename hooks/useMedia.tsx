"use client";
import { useState, useEffect } from "react";
import { type deviceNames } from "@/types/store"; // Ensure this is correctly imported

const useMedia = () => {
  return (queries: Partial<Record<Exclude<deviceNames, null>, string>>) => {
    const [matchedDevice, setMatchedDevice] = useState<deviceNames | null>(
      null
    );

    const checkMedia = () => {
      for (const [deviceName, query] of Object.entries(queries) as [
        deviceNames,
        string
      ][]) {
        if (window.matchMedia(query).matches) {
          setMatchedDevice(deviceName);
          return; // Stop after finding the first match
        }
      }
    };

    useEffect(() => {
      checkMedia(); // Run on mount

      const listeners = Object.entries(queries).map(([deviceName, query]) => {
        const mediaEvent = window.matchMedia(query);
        const listener = () => checkMedia();
        mediaEvent.addEventListener("change", listener);
        return { mediaEvent, listener };
      });

      return () => {
        listeners.forEach(({ mediaEvent, listener }) => {
          mediaEvent.removeEventListener("change", listener);
        });
      };
    }, [queries]);

    return matchedDevice;
  };
};

export default useMedia;
