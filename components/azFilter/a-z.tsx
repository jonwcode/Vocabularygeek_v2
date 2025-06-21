"use client";
import React from "react";
import { Flex } from "@/common";
import Desktop from "./desktop";
import Mobile from "./mobile";
import { useParams } from "next/navigation";
export default function AZ() {
  const { letter }: { letter: string } = useParams();

  return (
    <React.Fragment>
      <Flex column>
        <Mobile />
        <Desktop />
      </Flex>
    </React.Fragment>
  );
}
