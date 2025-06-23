"use client";
import Link from "next/link";
import { Box, Flex } from "@/common";
import css from "@/css/components/wordFilter/desktop.module.css";
import ArrowAZ from "@/assets/svg/arrow-az.svg";
import React, { useState, useEffect, useRef } from "react";

export default function AZ({ currLetter }: { currLetter?: string }) {
  const [showLetter, setShowLetters] = useState(false);
  const [letterClasses, setLetterClasses] = useState(`${css.letterContainer}`);
  const timeout = useRef<NodeJS.Timeout>(null);

  const toggleLetterClasses = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(
      () => {
        setLetterClasses(
          showLetter
            ? `${css.letterContainer} ${css.showLetters}`
            : `${css.letterContainer}`
        );
      },
      !showLetter ? 1200 : 0
    );
  };

  const cancelTimeout = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  };

  useEffect(() => {
    toggleLetterClasses();

    console.log(letterClasses);
  }, [showLetter]);
  return (
    <React.Fragment>
      <Flex
        middle
        style={{ mobile: { display: "none" }, tablet: { display: "none" } }}
      >
        <Flex
          middle
          center
          onMouseEnter={cancelTimeout}
          onMouseLeave={() => setShowLetters(false)}
          className={css.azWrapper}
          style={{ alignItems: "center" }}
        >
          <Flex middle className={css.btnContainer}>
            <Flex
              onMouseEnter={() => setShowLetters(true)}
              className={css.azButton}
            >
              <Box
                pr={10}
                style={{ color: "var(--lite-color-400)", fontWeight: "bold" }}
              >
                {!currLetter ? (
                  <Box style={{ width: "47px" }}>A - Z</Box>
                ) : (
                  <Box
                    style={{
                      textTransform: "uppercase",
                      color: "var(--primary-color)",
                    }}
                  >
                    {currLetter}
                  </Box>
                )}
              </Box>
              <ArrowAZ
                style={{
                  color: "var(--green-color-400)",
                }}
                width="25px"
                height="25px"
              />
            </Flex>
          </Flex>

          {/* Letter Container Starts */}
          <Flex middle className={`${letterClasses}`}>
            <Flex>
              <Link href="/vocabularyWords/a">A</Link>
            </Flex>
            <Flex>
              <Link href="/vocabularyWords/b">B</Link>
            </Flex>
            <Flex>
              <Link href="/vocabularyWords/c">C</Link>
            </Flex>
            <Flex>
              <Link href="/vocabularyWords/d">D</Link>
            </Flex>
            <Flex>
              <Link href="/vocabularyWords/e">E</Link>
            </Flex>
            <Flex>
              <Link href="/vocabularyWords/f">F</Link>
            </Flex>
            <Flex>
              <Link href="/vocabularyWords/g">G</Link>
            </Flex>
            <Flex>
              <Link href="/vocabularyWords/h">H</Link>
            </Flex>
            <Flex>
              <Link href="/vocabularyWords/i">I</Link>
            </Flex>
            <Flex>
              <Link href="/vocabularyWords/j">J</Link>
            </Flex>
            <Flex>
              <Link href="/vocabularyWords/k">K</Link>
            </Flex>
            <Flex>
              <Link href="/vocabularyWords/l">L</Link>
            </Flex>
            <Flex>
              <Link href="/vocabularyWords/m">M</Link>
            </Flex>
            <Flex>
              <Link href="/vocabularyWords/n">N</Link>
            </Flex>
            <Flex>
              <Link href="/vocabularyWords/o">O</Link>
            </Flex>
            <Flex>
              <Link href="/vocabularyWords/p">P</Link>
            </Flex>
            <Flex>
              <Link href="/vocabularyWords/q">Q</Link>
            </Flex>
            <Flex>
              <Link href="/vocabularyWords/r">R</Link>
            </Flex>
            <Flex>
              <Link href="/vocabularyWords/s">S</Link>
            </Flex>
            <Flex>
              <Link href="/vocabularyWords/t">T</Link>
            </Flex>
            <Flex>
              <Link href="/vocabularyWords/u">U</Link>
            </Flex>
            <Flex>
              <Link href="/vocabularyWords/v">V</Link>
            </Flex>
            <Flex>
              <Link href="/vocabularyWords/w">W</Link>
            </Flex>
            <Flex>
              <Link href="/vocabularyWords/x">X</Link>
            </Flex>
            <Flex>
              <Link href="/vocabularyWords/y">Y</Link>
            </Flex>
            <Flex>
              <Link href="/vocabularyWords/z">Z</Link>
            </Flex>
          </Flex>
          <Flex></Flex>
        </Flex>
      </Flex>
    </React.Fragment>
  );
}
