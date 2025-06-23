import { useState } from "react";
import Link from "next/link";
import { Flex, Box } from "@/common";
import UsePortal from "@/hooks/usePortal";
import ArrowOutwardSVG from "@/assets/svg/arrowOutward.svg";
import css from "@/css/components/azFilter/mobile.module.css";
import DropDownArrow from "@/assets/svg/dropDownArrow.svg";

export default function Mobile() {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showAZModel, setShowAZModel] = useState(false);
  const Portal = UsePortal;
  return (
    <Flex
      middle
      fullWidth
      className={css.selectBox}
      style={{
        desktop: { display: "none" },
        uhd: { display: "none" },
      }}
    >
      <Flex center style={{ width: "100%" }}>
        <Flex
          onClick={() => setShowDropDown((prev) => !prev)}
          style={{ width: "100%", position: "relative" }}
          center
          className={css.dropDownList}
        >
          <Box>All Words</Box>

          {/* Filter Word Drop Down */}
          {showDropDown && (
            <Flex column className={css.dropDownMenu}>
              <ul>
                <Portal>
                  <Box className={css.overlay} />
                </Portal>
                <li>
                  <Link href="/vocabularyWords/a-z">From A To Z</Link>
                </li>
                <li>
                  <Link href="/vocabularyWords/z-a">From Z To A</Link>
                </li>
                <li>
                  <Link href="/vocabularyWords/noun">Noun</Link>
                </li>
                <li>
                  <Link href="/vocabularyWords/verb">Verb</Link>
                </li>
                <li>
                  <Link href="/vocabularyWords/adjective">Adjective</Link>
                </li>
              </ul>
            </Flex>
          )}
          <Flex style={{ position: "absolute", right: 0 }}>
            <DropDownArrow />
          </Flex>
        </Flex>
      </Flex>

      <Flex>
        <Flex
          onClick={() => setShowAZModel((prev) => !prev)}
          className={css.button}
          style={{ width: "64px" }}
          middle
        >
          A-Z <ArrowOutwardSVG style={{ fill: "var(--green-color-400)" }} />
        </Flex>
        {showAZModel && (
          <Portal>
            <Flex className={css.azModel}>
              <ul>
                <li>
                  <Link href="/vocabularyWords/a">A</Link>
                </li>
                <li>
                  <Link href="/vocabularyWords/b">B</Link>
                </li>
                <li>
                  <Link href="/vocabularyWords/C">C</Link>
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
                  <Link href="/vocabularyWords/j">j</Link>
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
          </Portal>
        )}
      </Flex>
    </Flex>
  );
}
