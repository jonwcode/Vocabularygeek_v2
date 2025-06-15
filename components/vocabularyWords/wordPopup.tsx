import { Box, Flex } from "@/common";
import { type vocabWordType } from "@/types/vocabularyWords";
import css from "@/css/vocabularyWords/wordPopup.module.css";
import UsePortal from "@/hooks/usePortal";

type WordPopupType = {
  setShowWordPopup: React.Dispatch<React.SetStateAction<boolean>>;
  vocabWord: vocabWordType;
};

export default function WordPopup({
  vocabWord,
  setShowWordPopup,
}: WordPopupType) {
  const Portal = UsePortal;
  return (
    <Portal>
      <Box
        onClick={() => setShowWordPopup((prev) => !prev)}
        className={css.overlay}
      />
      <Flex className={css.box} column>
        <Box style={{ fontSize: "2rem", fontWeight: "bold" }}>
          {vocabWord.word}
        </Box>
        <Box style={{ fontWeight: "300" }}>{vocabWord.description}</Box>
      </Flex>
    </Portal>
  );
}
