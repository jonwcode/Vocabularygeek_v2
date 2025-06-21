import { Flex, Box } from "@/common";
import AZ from "./azFilter/a-z";
import FilterSVG from "@/assets/svg/filter.svg";
import css from "@/css/components/filter.module.css";
export default function Filter({ currLetter }: { currLetter?: string }) {
  return (
    <Flex middle fullWidth mb={10}>
      <Flex middle style={{ color: "var(--lite-color-100)" }}>
        <FilterSVG style={{ paddingRight: 5 }} />
        Word Filters
      </Flex>
      <Flex ml={20} middle className={css.selectBox}>
        <Flex style={{ width: "80%" }}>
          <Box mr={20}>From A-Z</Box>
        </Flex>
        <Flex style={{ width: "30%" }}>
          <AZ />
        </Flex>
      </Flex>
    </Flex>
  );
}
