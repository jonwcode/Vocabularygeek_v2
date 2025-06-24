"use client";
import { useEffect } from "react";
import type { Metadata } from "next";
import Provider from "@/store/provider";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="darkreader-lock"></meta>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
