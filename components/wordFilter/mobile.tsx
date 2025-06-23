import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Flex, Box } from "@/common";
import UsePortal from "@/hooks/usePortal";
import ArrowOutwardSVG from "@/assets/svg/arrowOutward.svg";
import css from "@/css/components/wordFilter/mobile.module.css";
import SelectCategory from "./selectCategory";

export default function Mobile() {
  const [showAZModel, setShowAZModel] = useState(false);
  const AZRef = useRef<HTMLDivElement | null>(null);
  const Portal = UsePortal;

  const closeAZModel = () => {
    const handleClickOutSide = (evt: MouseEvent) => {
      if (AZRef?.current && !AZRef.current?.contains(evt.target as Node)) {
        setShowAZModel(false);
      }
    };

    document.addEventListener("click", handleClickOutSide);

    return () => document.removeEventListener("click", handleClickOutSide);
  };

  useEffect(() => {
    closeAZModel();
  }, []);

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
      <SelectCategory />

      {/*  
          A-Z
      */}
      <Flex>
        <Flex
          ref={AZRef}
          onClick={() => setShowAZModel(true)}
          className={css.button}
          style={{
            width: "67px",
            color: "var(--lite-color-400)",
            fontWeight: "bold",
          }}
          middle
        >
          A-Z <ArrowOutwardSVG style={{ fill: "var(--green-color-400)" }} />
        </Flex>
        {showAZModel && (
          <Portal>
            <Box className={css.overlay} />
            <Flex column className={css.azModel}>
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
