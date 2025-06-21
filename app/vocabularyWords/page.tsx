import React from "react";
import { Flex, Box } from "@/common";
import HrLine from "@/components/hrLine";
import Header from "@/components/header";
import { Wrapper, Content } from "@/common";
import WordBox from "../../components/vocabularyWords/wordBox";
import Filter from "@/components/filter";
import css from "@/css/vocabularyWords.module.css";
import { type vocabWordType } from "@/types/vocabularyWords";

export default async function Page() {
  const req = await fetch(`${process.env.API_URL}fetchWords`, {
    method: "POST",
  });

  const res = await req.json();

  return (
    <React.Fragment>
      <Wrapper>
        <Header />
        <Content>
          <Filter />
          <HrLine mb={40} />
          <Flex border column mt={50}>
            <Box
              className={css.wordContainer}
              style={{
                "--per-column": 3,
                tablet: { "--per-column": 2 },
                mobile: { "--per-column": 1 },
              }}
            >
              {res.map((vocabWord: vocabWordType, i: number) => (
                <WordBox
                  key={vocabWord.word || i} // Preferably use a unique value like vocabWord.word
                  vocabWord={vocabWord}
                />
              ))}
            </Box>
          </Flex>
        </Content>
      </Wrapper>
    </React.Fragment>
  );
}
