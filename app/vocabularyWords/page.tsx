import React from "react";
import Header from "@/components/header";
import { Wrapper, Content } from "@/common";
import WordBox from "./wordBox";

export default function Page() {
  return (
    <React.Fragment>
      <Wrapper>
        <Header />
        <Content>
          <WordBox
            word="confabulate"
            type="verb"
            description="I thought I was going to be bored on my eight hour bus ride from Tallinn to Riga, but the time went by so quickly when an attractive young woman sitting next to me began to CONFABULATE."
          />
        </Content>
      </Wrapper>
    </React.Fragment>
  );
}
