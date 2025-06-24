import { Flex, Box } from "@/common";
import css from "@/css/components/input.module.css";

type Props = {
  name: string;
  value?: string;
  type?: string;
  placeholder?: string;
};

export default function Input(props: Props) {
  const { name, value, type, placeholder }: Props = props;

  return (
    <Flex className={css.inputContainer} column border>
      <input name={name} placeholder={placeholder} value={value} type={type} />
    </Flex>
  );
}
