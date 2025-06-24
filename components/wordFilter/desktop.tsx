"use client";
import Link from "next/link";
import { Box, Flex } from "@/common";
import css from "@/css/components/wordFilter/desktop.module.css";
import ArrowAZ from "@/assets/svg/arrow-az.svg";
import SelectCategory from "./selectCategory";
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

  useEffect(() => {
    toggleLetterClasses();
  }, [showLetter]);

  const showLetters = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setShowLetters(true);
  };

  const hideLetters = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      setShowLetters(false);
    }, 1200);
  };

  return (
    <React.Fragment>
      <Flex
        middle
        style={{ mobile: { display: "none" }, tablet: { display: "none" } }}
      >
        <Flex
          middle
          onMouseLeave={() => setShowLetters(false)}
          className={css.azWrapper}
          style={{ alignItems: "center" }}
        >
          <Flex middle>
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
          <ul onMouseEnter={showLetters} className={`${letterClasses}`}>
            <li>
              <Link href="/vocabularyWords/a">A</Link>
            </li>

            <li>
              <Link href="/vocabularyWords/b">B</Link>
            </li>
            <li>
              <Link href="/vocabularyWords/c">C</Link>
            </li>
            <li>
              <Link href="/vocabularyWords/d">D</Link>
            </li>
            <li>
              <Link href="/vocabularyWords/e">E</Link>
            </li>
            <li>
              <Link href="/vocabularyWords/f">F</Link>
            </li>
            <li>
              <Link href="/vocabularyWords/g">G</Link>
            </li>
            <li>
              <Link href="/vocabularyWords/h">H</Link>
            </li>
            <li>
              <Link href="/vocabularyWords/i">I</Link>
            </li>
            <li>
              <Link href="/vocabularyWords/j">J</Link>
            </li>
            <li>
              <Link href="/vocabularyWords/k">K</Link>
            </li>
            <li>
              <Link href="/vocabularyWords/l">L</Link>
            </li>
            <li>
              <Link href="/vocabularyWords/m">M</Link>
            </li>
            <li>
              <Link href="/vocabularyWords/n">N</Link>
            </li>
            <li>
              <Link href="/vocabularyWords/o">O</Link>
            </li>
            <li>
              <Link href="/vocabularyWords/p">P</Link>
            </li>
            <li>
              <Link href="/vocabularyWords/q">Q</Link>
            </li>
            <li>
              <Link href="/vocabularyWords/r">R</Link>
            </li>
            <li>
              <Link href="/vocabularyWords/s">S</Link>
            </li>
            <li>
              <Link href="/vocabularyWords/t">T</Link>
            </li>
            <li>
              <Link href="/vocabularyWords/u">U</Link>
            </li>
            <li>
              <Link href="/vocabularyWords/v">V</Link>
            </li>
            <li>
              <Link href="/vocabularyWords/w">W</Link>
            </li>
            <li>
              <Link href="/vocabularyWords/x">X</Link>
            </li>
            <li>
              <Link href="/vocabularyWords/y">Y</Link>
            </li>
            <li>
              <Link href="/vocabularyWords/z">Z</Link>
            </li>
          </ul>
        </Flex>

        <Flex
          style={{
            width: "600px",
            marginLeft: 50,
            position: "absolute",
            right: 0,
          }}
        >
          <SelectCategory />
        </Flex>
      </Flex>
    </React.Fragment>
  );
}
