"use client";
import { useEffect, useState } from "react";
import { Box, Flex } from "@/common";
import { type vocabWordType } from "@/types/vocabularyWords";
import css from "@/css/vocabularyWords/wordPopup.module.css";
import UsePortal from "@/hooks/usePortal";

type WordPopupType = {
  setShowWordPopup: React.Dispatch<React.SetStateAction<boolean>>;
  vocabWord: vocabWordType;
  showWordPopup: boolean;
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
      <Flex
        style={{
          width: "600px",
          minHeight: "400px",
          mobile: { width: "95%" },
          tablet: { width: "95%" },
        }}
        className={boxClass}
        column
      >
        <Box
          className={css.word}
          data-type={vocabWord.type}
          style={{ fontSize: "2rem", fontWeight: "bold" }}
        >
          {vocabWord.word}
        </Box>

        <Box className={css.meaning} tag="fieldset">
          <Box tag="legend">Meaning</Box> {vocabWord.meaning}
        </Box>
        <Box style={{ fontWeight: "300" }}>{vocabWord.description}</Box>
      </Flex>
    </Portal>
  );
}
