"use client";
import React from "react";
import { Box } from "@/common";
export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <Box style={{ width: "100%", maxWidth: "1280px", margin: "auto" }}>
      {children}
    </Box>
  );
}
