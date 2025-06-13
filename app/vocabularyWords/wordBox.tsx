import React, { useEffect, useTransition } from "react";
import { Box, Flex } from "@/common";
import UseTruncate from "@/hooks/useTruncate";
import css from "@/css/vocabularyWords/wordBox.module.css";

interface WordBoxProps {
  word: string;
  type: number;
  description: string;
}

export default function WordBox({ word, type, description }: WordBoxProps) {
  const truncate = UseTruncate;
  return (
    <Flex className={css.box} column middle center>
      <Flex middle data-type={type} className={css.word}>
        {word}
      </Flex>
      <Box className={css.shortDes}>{truncate(description, 70)}</Box>
    </Flex>
  );
}
