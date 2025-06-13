import Link from "next/link";
import { Box, Flex } from "@/common";
import css from "@/css/components/a-z.module.css";

export default function AZ() {
  return (
    <Flex middle className={css.letterContainer} style={{ tablet: { width: '95%'}, flexWrap: "wrap", margin: 'auto'}}>
        <Flex m={5}>
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
      </Flex>
      <Flex mt={40}>
      <Flex>
        <Link href="/vocabularyWords/a">A</Link>
      </Flex>
      <Flex>
        <Link href="/vocabuarlyWords/b">B</Link>
      </Flex>
      <Flex>
        <Link href="/vocabuarlyWords/c">C</Link>
      </Flex>
      <Flex>
        <Link href="/vocabuarlyWords/d">D</Link>
      </Flex>
      <Flex>
        <Link href="/vocabuarlyWords/e">E</Link>
      </Flex>
      <Flex>
        <Link href="/vocabuarlyWords/f">F</Link>
      </Flex>
      <Flex>
        <Link href="/vocabuarlyWords/g">G</Link>
      </Flex>
      <Flex>
        <Link href="/vocabuarlyWords/h">H</Link>
      </Flex>
      <Flex>
        <Link href="/vocabuarlyWords/i">I</Link>
      </Flex>
      <Flex>
        <Link href="/vocabuarlyWords/j">J</Link>
      </Flex>
      <Flex>
        <Link href="/vocabuarlyWords/k">K</Link>
      </Flex>
      <Flex>
        <Link href="/vocabuarlyWords/l">L</Link>
      </Flex>
      <Flex>
        <Link href="/vocabuarlyWords/m">M</Link>
      </Flex>
      <Flex>
        <Link href="/vocabuarlyWords/n">N</Link>
      </Flex>
      <Flex>
        <Link href="/vocabuarlyWords/o">O</Link>
      </Flex>
      <Flex>
        <Link href="/vocabuarlyWords/p">P</Link>
      </Flex>
      <Flex>
        <Link href="/vocabuarlyWords/q">Q</Link>
      </Flex>
      <Flex>
        <Link href="/vocabuarlyWords/r">R</Link>
      </Flex>
      <Flex>
        <Link href="/vocabuarlyWords/s">S</Link>
      </Flex>
      <Flex>
        <Link href="/vocabuarlyWords/t">T</Link>
      </Flex>
      <Flex>
        <Link href="/vocabuarlyWords/u">U</Link>
      </Flex>
      <Flex>
        <Link href="/vocabuarlyWords/v">V</Link>
      </Flex>
      <Flex>
        <Link href="/vocabuarlyWords/w">W</Link>
      </Flex>
      <Flex>
        <Link href="/vocabuarlyWords/x">X</Link>
      </Flex>
      <Flex>
        <Link href="/vocabuarlyWords/y">Y</Link>
      </Flex>
      <Flex>
        <Link href="/vocabuarlyWords/z">Z</Link>
      </Flex>
      </Flex>
    </Flex>
  );
}
