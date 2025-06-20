import React from "react";
import { Box } from "@/common";
export default function Content({ children }: { children?: React.ReactNode }) {
  return (
    <Box
      style={{
        marginTop: 50,
        paddingBottom: 10,
        maxWidth: "95%",
        margin: "auto",
      }}
    >
      {children}
    </Box>
  );
}
