"use client";
import React, { useState } from "react";
import { Box, Flex } from "@/common";
import UseTruncate from "@/hooks/useTruncate";
import css from "@/css/vocabularyWords/wordBox.module.css";
import WordPopup from "./wordPopup";

type VocabWord = {
  word: string;
  type: number;
  description: string;
};

type WordBoxProps = {
  vocabWord: VocabWord;
};

export default function WordBox({ vocabWord }: WordBoxProps) {
  const truncate = UseTruncate;

  const [showWordPopup, setShowWordPopup] = useState(false);

  return (
    <React.Fragment>
      <Flex
        onClick={() => setShowWordPopup((prev) => !prev)}
        className={css.box}
        column
        middle
        center
      >
        <Flex middle data-type={vocabWord.type} className={css.word}>
          {vocabWord.word}
        </Flex>
        <Box className={css.shortDes}>
          {truncate(vocabWord.description, 70)}
        </Box>
      </Flex>
      {showWordPopup && (
        <WordPopup setShowWordPopup={setShowWordPopup} vocabWord={vocabWord} />
      )}
    </React.Fragment>
  );
}
