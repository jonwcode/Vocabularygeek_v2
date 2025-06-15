"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Flex, Box } from "@/common";
import HrLine from "@/components/hrLine";
import Header from "@/components/header";
import { Wrapper, Content } from "@/common";
import WordBox from "@/components/vocabularyWords/wordBox";
import AZ from "@/components/a-z";
import css from "@/css/vocabularyWords.module.css";


type VocabWords = {
  word: string;
  description: string;
  type: number;
};
type VocabWordList = VocabWords[];



export default function Page() {


  const [words, setWords] = useState<VocabWordList>([]);

  const {letter }: { letter: string } = useParams();

  const fetchData = async () => {

    console.log(letter);

  const req = await fetch(`/api/fetchWords`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `letter=${letter}`,
  });

  const res = await req.json();


  setWords(res);
  }

  
  useEffect (() => {

  console.log(process.env.NEXT_PUBLIC_API_URL, 'env here');

    fetchData();

  }, [])



  return (
    <React.Fragment>
      <Wrapper>
        <Header />
        <Content>
          <Flex column mt={50}>

   
            <AZ currLetter={letter} />
           
        
            <HrLine mb={40} />
         
            <Box className={css.wordContainer} style={{ "--per-column": 3, tablet: { "--per-column": 2}, mobile: { "--per-column": 1 }}}>
            {words.map((vocabWord, i) => (
            <WordBox
            key={vocabWord.word || i}
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
