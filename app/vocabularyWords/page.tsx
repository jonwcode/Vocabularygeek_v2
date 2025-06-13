
import React from "react";
import { Flex, Box } from "@/common";
import HrLine from "@/components/hrLine";
import Header from "@/components/header";
import { Wrapper, Content } from "@/common";
import WordBox from "./wordBox";
import AZ from "@/components/a-z";
import css from "@/css/vocabularyWords.module.css";

type vocabWordType = {
  word: string;
  description: string;
  type: number
}

export default async function Page() {

  const req = await fetch(`${process.env.API_URL}fetchWords/`);

  const res = await req.json();

  console.log(res);

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
            <Box className={css.wordContainer}>
            {res.map((vocabWord: vocabWordType, i: number) => (
            <WordBox
            key={vocabWord.word || i} // Preferably use a unique value like vocabWord.word
            word={vocabWord.word}
            type={vocabWord.type}
            description={vocabWord.description}
              />
            ))}

            </Box>
          </Flex>
        </Content>
      </Wrapper>
    </React.Fragment>
  );
}