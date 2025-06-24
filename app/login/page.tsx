"use client";
import { Wrapper, Content, Flex, Box } from "@/common";
import css from "@/css/login/page.module.css";
import Logo from "@/assets/svg/logo.svg";
import Link from "next/link";
import React from "react";
import Input from "@/components/input";

export default function Page() {
  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault;
  };
  return (
    <Wrapper>
      <Flex column className={css.container}>
        <Flex center middle className={css.logo}>
          <Link
            href="/"
            style={{
              width: "100%",
              textAlign: "center",
            }}
          >
            <Logo />
          </Link>
        </Flex>
        <Flex column center mt={15} mb={25}>
          <Box tag="h2">Login</Box>
          <Box style={{ color: "var(--lite-color-200)" }} tag="p">
            Expand your lexicon
          </Box>
        </Flex>
        <Box tag="form" method="post" onSubmit={handleSubmit}>
          <Flex column className={css.formInputs}>
            <Input name="email" type="text" placeholder="Email Address" />
          </Flex>
        </Box>
      </Flex>
    </Wrapper>
  );
}
