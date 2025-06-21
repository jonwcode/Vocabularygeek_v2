import { Flex, Box } from "@/common";
import FilterSVG from "@/assets/svg/filter.svg";
import ArrowOutwardSVG from "@/assets/svg/arrowOutward.svg";
import css from "@/css/components/azFilter/mobile.module.css";
export default function Mobile() {
  return (
    <Flex
      bottom
      style={{
        desktop: { display: "none" },
        uhd: { display: "none" },
      }}
    >
      <Flex middle>
        <Flex className={css.button} middle>
          A-Z <ArrowOutwardSVG style={{ fill: "var(--green-color-400)" }} />
        </Flex>
      </Flex>
    </Flex>
  );
}
