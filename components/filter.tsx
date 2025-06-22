import { Flex, Box } from "@/common";
import AZ from "./azFilter/a-z";
import FilterSVG from "@/assets/svg/filter.svg";
import css from "@/css/components/filter.module.css";
export default function Filter({ currLetter }: { currLetter?: string }) {
  return (
    <Flex middle fullWidth mb={10}>
      <Flex
        middle
        style={{
          color: "var(--lite-color-100)",
          tablet: { width: "150px" },
          whiteSpace: "nowrap",
        }}
        pr={5}
      >
        <FilterSVG style={{ paddingRight: 5 }} />
        <Box style={{ mobile: { display: "none" } }}>Word Filters</Box>
      </Flex>
      <Flex
        style={{
          width: "30%",
          mobile: { width: "100%" },
          tablet: { width: "100%" },
        }}
      >
        <AZ />
      </Flex>
    </Flex>
  );
}
