import { Flex, Box } from "@/common";
import FilterSVG from "@/assets/svg/filter.svg";
import ArrowOutwardSVG from "@/assets/svg/arrowOutward.svg";
import css from "@/css/components/azFilter/mobile.module.css";
import DropDownArrow from "@/assets/svg/dropDownArrow.svg";

export default function Mobile() {
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
          style={{ width: "100%", position: "relative" }}
          center
          className={css.dropDownList}
        >
          <Flex style={{ display: "none" }} className={css.dropDownMenu}>
            <ul>
              <li>From A To Z</li>
              <li>From Z To A</li>
            </ul>
          </Flex>
          <Flex style={{ position: "absolute", right: 0 }}>
            <DropDownArrow />
          </Flex>
        </Flex>
      </Flex>

      <Flex>
        <Flex className={css.button} style={{ width: "64px" }} middle>
          A-Z <ArrowOutwardSVG style={{ fill: "var(--green-color-400)" }} />
        </Flex>
      </Flex>
    </Flex>
  );
}
