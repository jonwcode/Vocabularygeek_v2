"use client";
import { useEffect, useContext } from "react";
import Context from "@/store/context";
import Header from "@/components/header";
import { Wrapper } from "@/common";

export default function Home() {
  const ctx = useContext(Context);

  useEffect(() => {
    console.log(ctx.deviceInfo?.deviceName);
  }, [ctx.deviceInfo]);
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
}
