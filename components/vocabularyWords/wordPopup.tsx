"use client";
import { useEffect, useState } from "react";
import { Box, Flex } from "@/common";
import { type vocabWordType } from "@/types/vocabularyWords";
import css from "@/css/vocabularyWords/wordPopup.module.css";
import UsePortal from "@/hooks/usePortal";

type WordPopupType = {
  setShowWordPopup: React.Dispatch<React.SetStateAction<boolean>>;
  vocabWord: vocabWordType;
  showWordPopup: () => {};
};

export default function WordPopup({
  vocabWord,
  showWordPopup,
  setShowWordPopup,
}: WordPopupType) {
  const Portal = UsePortal;

  const [boxClass, setBoxClass] = useState(`${css.box}`);

  useEffect(() => {
    if (!showWordPopup) {
      setBoxClass(`${css.box}`);
    } else {
      setBoxClass(`${css.box} ${css.slideBox}`);
    }
  }, [showWordPopup]);

  return (
    <Portal>
      <Box
        onClick={() => setShowWordPopup((prev) => !prev)}
        className={css.overlay}
      />
      <Flex className={boxClass} column>
        <Box style={{ fontSize: "2rem", fontWeight: "bold" }}>
          {vocabWord.word}
        </Box>
        <Box>Meaning</Box>
        <Box style={{ fontWeight: "300" }}>{vocabWord.description}</Box>
      </Flex>
    </Portal>
  );
}
