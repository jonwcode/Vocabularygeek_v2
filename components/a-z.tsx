import Link from "next/link";
import { Box, Flex } from "@/common";
import css from "@/css/components/a-z.module.css";

export default function AZ({currLetter}: { currLetter?: string}) {
  return (
    <Flex column middle className={css.letterContainer} style={{ justifyContent: 'flex-start', tablet: { width: '95%'}, flexWrap: "wrap", margin: 'auto'}}>
        <Flex style={{ width: '100%', margin: 'auto'}}>
                  <Flex
                  left
                    style={{
                      height: 'max-content',
                      width: '95%',
                      color: "var(--lite-color-100)",
                      fontSize: "3rem",
                      textShadow: "1px 0px var(--lite-color-200)",
                      paddingLeft: 0,
                      marginBottom: 20,
                      textTransform: 'uppercase',
                    }}
                  >
                    {!currLetter ? "A-Z" : <Box style={{ color: 'var(--primary-color)'}}>{currLetter}</Box>}
                  </Flex>
      </Flex>
      <Flex mt={40} style={{ flexWrap: 'wrap', height: 'max-content'}}>
      <Flex>
        <Link href="/vocabularyWords/a">A</Link>
      </Flex>
      <Flex>
        <Link href="/vocabularyWords/b">B</Link>
      </Flex>
      <Flex>
        <Link href="/vocabularyWords/c">C</Link>
      </Flex>
      <Flex>
        <Link href="/vocabularyWords/d">D</Link>
      </Flex>
      <Flex>
        <Link href="/vocabularyWords/e">E</Link>
      </Flex>
      <Flex>
        <Link href="/vocabularyWords/f">F</Link>
      </Flex>
      <Flex>
        <Link href="/vocabularyWords/g">G</Link>
      </Flex>
      <Flex>
        <Link href="/vocabularyWords/h">H</Link>
      </Flex>
      <Flex>
        <Link href="/vocabularyWords/i">I</Link>
      </Flex>
      <Flex>
        <Link href="/vocabularyWords/j">J</Link>
      </Flex>
      <Flex>
        <Link href="/vocabularyWords/k">K</Link>
      </Flex>
      <Flex>
        <Link href="/vocabularyWords/l">L</Link>
      </Flex>
      <Flex>
        <Link href="/vocabularyWords/m">M</Link>
      </Flex>
      <Flex>
        <Link href="/vocabularyWords/n">N</Link>
      </Flex>
      <Flex>
        <Link href="/vocabularyWords/o">O</Link>
      </Flex>
      <Flex>
        <Link href="/vocabularyWords/p">P</Link>
      </Flex>
      <Flex>
        <Link href="/vocabularyWords/q">Q</Link>
      </Flex>
      <Flex>
        <Link href="/vocabularyWords/r">R</Link>
      </Flex>
      <Flex>
        <Link href="/vocabularyWords/s">S</Link>
      </Flex>
      <Flex>
        <Link href="/vocabularyWords/t">T</Link>
      </Flex>
      <Flex>
        <Link href="/vocabularyWords/u">U</Link>
      </Flex>
      <Flex>
        <Link href="/vocabularyWords/v">V</Link>
      </Flex>
      <Flex>
        <Link href="/vocabularyWords/w">W</Link>
      </Flex>
      <Flex>
        <Link href="/vocabularyWords/x">X</Link>
      </Flex>
      <Flex>
        <Link href="/vocabularyWords/y">Y</Link>
      </Flex>
      <Flex>
        <Link href="/vocabularyWords/z">Z</Link>
      </Flex>
      </Flex>
    </Flex>
  );
}
