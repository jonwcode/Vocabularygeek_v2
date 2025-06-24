"use client";
import { useEffect, useState } from "react";
import { Box, Flex } from "@/common";
import { type vocabWordType } from "@/types/vocabularyWords";
import css from "@/css/vocabularyWords/wordPopup.module.css";
import UsePortal from "@/hooks/usePortal";
import SpeakSVG from "@/assets/svg/speak.svg";

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

  const speakWord = (word: string) => {
    const synth = window.speechSynthesis;
    const voices = synth.getVoices();

    if (!voices.length) {
      synth.onvoiceschanged = () => {
        let voices = synth.getVoices();
        speak(word, voices);
      };
    } else {
      speak(word, voices);
    }
  };

  const speak = (word: string, voices: any[]) => {
    const utterance = new SpeechSynthesisUtterance(word);
    const selectedVoice = voices.find((v) => v.name === "Paulina");

    if (selectedVoice) {
      utterance.voice = selectedVoice;
    } else {
      console.warn(`Voice not found. Using default.`);
    }

    speechSynthesis.speak(utterance);

    speechSynthesis.getVoices().forEach((voice) => {
      console.log(`${voice.name} [${voice.lang}]`);
    });
  };

  return (
    <Portal>
      <Box
        onClick={() => setShowWordPopup((prev) => !prev)}
        className={css.overlay}
      />
      <Flex
        style={{
          width: "1280px",
          minHeight: "80%",
          mobile: { width: "95%" },
          tablet: { width: "95%" },
        }}
        className={boxClass}
        column
      >
        <Flex
          className={css.word}
          data-type={vocabWord.type}
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            padding: 20,
            borderRadius: "var(--radius-md)",
          }}
        >
          <Flex middle>
            {vocabWord.word}{" "}
            <SpeakSVG
              onClick={() => speakWord(`${vocabWord.word}`)}
              width={30}
              height={30}
              className={css.speakSVG}
            />
          </Flex>
        </Flex>

        <Box className={css.meaning} tag="fieldset">
          <Box tag="legend">Meaning</Box> {vocabWord.meaning}
        </Box>
        {/* <Box style={{ fontWeight: "300" }}>{vocabWord.description}</Box> */}
        <Flex>
          <h1>Used in a sentance</h1>
        </Flex>
      </Flex>
    </Portal>
  );
}
