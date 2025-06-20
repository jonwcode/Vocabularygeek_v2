import { Wrapper, Content, Flex, Box } from "@/common";
import css from "@/css/login/page.module.css";

export default function Page() {
  return (
    <Wrapper>
      <Content>
        <Flex className={css.container}>
          <h1>Login</h1>
        </Flex>
      </Content>
    </Wrapper>
  );
}
