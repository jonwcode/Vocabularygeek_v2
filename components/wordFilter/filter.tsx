"use client";
import { Flex, Box } from "@/common";
import Desktop from "@/components/wordFilter/desktop";
import Mobile from "@/components/wordFilter/mobile";
import FilterSVG from "@/assets/svg/filter.svg";
import css from "@/css/components/filter.module.css";
export default function Filter({ sortBy }: { sortBy?: string }) {
  return (
    <Flex style={{ zIndex: 25, position: "relative" }} middle fullWidth mb={10}>
      <Flex
        middle
        style={{
          color: "var(--lite-color-300)",
          tablet: { width: "150px" },
          whiteSpace: "nowrap",
        }}
        pr={5}
      >
        <FilterSVG />
        <Box style={{ mobile: { display: "none" } }}>Word Filters</Box>
      </Flex>
      <Flex
        style={{
          width: "30%",
          mobile: { width: "100%" },
          tablet: { width: "100%" },
        }}
      >
        <Desktop />
        <Mobile />
      </Flex>
    </Flex>
  );
}
