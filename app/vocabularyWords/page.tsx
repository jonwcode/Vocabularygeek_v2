import React from "react";
import { Flex, Box } from "@/common";
import HrLine from "@/components/hrLine";
import Header from "@/components/header";
import { Wrapper, Content } from "@/common";
import WordBox from "./wordBox";
import AZ from "@/components/a-z";

export default function Page() {
  return (
    <React.Fragment>
      <Wrapper>
        <Header />
        <Content>
          <Flex column>
            <Box
              style={{
                color: "var(--lite-color-100)",
                fontSize: "3rem",
                textShadow: "1px 0px var(--lite-color-200)",
                paddingLeft: 10,
                marginBottom: 20,
              }}
            >
              A-Z
            </Box>
            <AZ />
            <HrLine mb={40} />
            <WordBox
              word="confabulate"
              type="verb"
              description="I thought I was going to be bored on my eight hour bus ride from Tallinn to Riga, but the time went by so quickly when an attractive young woman sitting next to me began to CONFABULATE."
            />
          </Flex>
        </Content>
      </Wrapper>
    </React.Fragment>
  );
}
