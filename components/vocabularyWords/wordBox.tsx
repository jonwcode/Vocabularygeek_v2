"use client";
import React, { useState, useEffect } from "react";
import { Box, Flex } from "@/common";
import UseTruncate from "@/hooks/useTruncate";
import css from "@/css/vocabularyWords/wordBox.module.css";
import WordPopup from "./wordPopup";
import { type vocabWordType } from "@/types/vocabularyWords";

type WordBoxProps = {
  vocabWord: vocabWordType;
};

export default function WordBox({ vocabWord }: WordBoxProps) {
  const truncate = UseTruncate;

  const [showWordPopup, setShowWordPopup] = useState(false);

  useEffect(() => {
    console.log(vocabWord);
  }, []);

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
          {truncate(vocabWord.description, 70) || vocabWord.meaning}
        </Box>
      </Flex>
      {showWordPopup && (
        <WordPopup
          showWordPopup={showWordPopup}
          setShowWordPopup={setShowWordPopup}
          vocabWord={vocabWord}
        />
      )}
    </React.Fragment>
  );
}
