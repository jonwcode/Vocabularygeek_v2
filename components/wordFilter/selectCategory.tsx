import { Flex, Box } from "@/common";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import DropDownArrow from "@/assets/svg/dropDownArrow.svg";
import CheckmarkSVG from "@/assets/svg/checkmark.svg";
import UsePortal from "@/hooks/usePortal";
import Link from "next/link";
import css from "@/css/components/wordFilter/selectCategory.module.css";

export default function SelectCategory({
  setShowAZModel,
}: {
  setShowAZModel?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [cat, setCat] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const Portal = UsePortal;
  const { sortBy }: { sortBy: string } = useParams();
  const dropDownRef = useRef<HTMLDivElement>(null);

  const closeDropDown = () => {
    const handleClickOutSide = (evt: MouseEvent) => {
      if (
        dropDownRef?.current &&
        !dropDownRef?.current.contains(evt.target as Node)
      ) {
        setShowDropDown(false);
      }
    };

    document.addEventListener("click", handleClickOutSide);

    return () => document.removeEventListener("click", handleClickOutSide);
  };

  useEffect(() => {
    closeDropDown();

    console.log(sortBy, "sort by");
    // Prevent any funny business
    if (
      sortBy === "a-z" ||
      sortBy === "z-a" ||
      sortBy === "noun" ||
      sortBy === "verb" ||
      sortBy === "adjective" ||
      /^[a-z]$/.test(sortBy)
    ) {
      switch (sortBy) {
        case "a-z":
          setCat("From A To Z");
          break;
        case "z-a":
          setCat("From Z To A");
          break;
        default:
          setCat(`<span style='text-transform: capitalize;'>${sortBy}</span>`);
      }
    } else {
      setCat("All Words");
    }
  }, []);
  return (
    <Flex center style={{ width: "100%" }}>
      <Flex
        style={{ width: "100%", position: "relative" }}
        center
        className={css.dropDownList}
      >
        <Box
          style={{
            width: "100%",
            height: "30px",
            textAlign: "center",
            lineHeight: "30px",
            position: "absolute",
            left: 0,
          }}
          ref={dropDownRef}
          onClick={() => setShowDropDown(true)}
        >
          <div
            style={{ pointerEvents: "none" }}
            dangerouslySetInnerHTML={{ __html: `${cat}` }}
          />
        </Box>

        {/* Filter Word Drop Down */}
        {showDropDown && (
          <Flex column className={css.dropDownMenu}>
            <ul>
              <Portal>
                <Box className={css.overlay} />
              </Portal>
              <li>
                <Link href="/vocabularyWords/">
                  <Flex middle row fullWidth center>
                    {!sortBy && (
                      <CheckmarkSVG
                        style={{
                          color: "var(--checkmark-color)",
                          position: "absolute",
                          left: "70px",
                        }}
                        width="25"
                      />
                    )}
                    All Words
                  </Flex>
                </Link>
              </li>
              <li>
                <Link href="/vocabularyWords/a-z">
                  {sortBy === "a-z" && (
                    <CheckmarkSVG
                      style={{
                        color: "var(--checkmark-color)",
                        position: "absolute",
                        left: "70px",
                      }}
                      width="25"
                    />
                  )}
                  From A To Z
                </Link>
              </li>
              <li>
                <Link href="/vocabularyWords/z-a">
                  {sortBy === "z-a" && (
                    <CheckmarkSVG
                      style={{
                        color: "var(--checkmark-color)",
                        position: "absolute",
                        left: "70px",
                      }}
                      color="var(--checkmark-color)"
                      width="25"
                    />
                  )}
                  From Z To A
                </Link>
              </li>
              <li>
                <Link href="/vocabularyWords/noun">
                  {sortBy === "noun" && (
                    <CheckmarkSVG
                      style={{
                        color: "var(--checkmark-color)",
                        position: "absolute",
                        left: "70px",
                      }}
                      width="25"
                    />
                  )}
                  Noun
                </Link>
              </li>
              <li>
                <Link href="/vocabularyWords/verb">
                  {sortBy === "verb" && (
                    <CheckmarkSVG
                      style={{
                        color: "var(--checkmark-color)",
                        position: "absolute",
                        left: "70px",
                      }}
                      width="25"
                    />
                  )}
                  Verb
                </Link>
              </li>
              <li>
                <Link href="/vocabularyWords/adjective">
                  {sortBy === "adjective" && (
                    <CheckmarkSVG
                      style={{
                        color: "var(--checkmark-color)",
                        position: "absolute",
                        left: "70px",
                      }}
                      width="25"
                    />
                  )}
                  Adjective
                </Link>
              </li>
            </ul>
          </Flex>
        )}
        <Flex style={{ position: "absolute", right: 0 }}>
          <DropDownArrow />
        </Flex>
      </Flex>
    </Flex>
  );
}
