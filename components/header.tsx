"use client";
import React from "react";
import Link from "next/link";
import Logo from "@/assets/svg/logo.svg";
import { Flex, Box } from "@/common";
import css from "@/css/components/header.module.css";
export default function Headers() {
  return (
    <React.Fragment>
      <Flex className={css.header} tag="header" mb={50}>
        {/* Left Header Starts */}
        <Flex style={{ width: "70%" }}>
          <Flex style={{ padding: 15 }}>
            <Link href="/">
              <Logo />
            </Link>
            <Flex
              ml={20}
              middle
              className={css.leftHeaderLinks}
              style={{
                tablet: { display: "none" },
                mobile: { display: "none" },
              }}
            >
              <Link href="/vocabularyWords">Vocabulary Words</Link>
              <Link href="/colloquialisms">Colloquialisms</Link>
            </Flex>
          </Flex>
        </Flex>
        {/* Left Header Ends */}
        {/* Right Header Starts */}
        <Flex
          right
          middle
          pr={10}
          style={{
            width: "50%",
            tablet: { display: "none" },
          }}
          className={css.rightHeaderLinks}
        >
          <Link href="/login">Login</Link>
          <Link href="/signup">Sign Up</Link>
        </Flex>
      </Flex>
    </React.Fragment>
  );
}
