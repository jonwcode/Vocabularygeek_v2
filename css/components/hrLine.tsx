import { Box } from "@/common";

type HrLineProps = React.ComponentProps<typeof HrLineProps>;

export default function HrLine(props: HrLineProps) {
  return (
    <Box
      style={{
        width: "100%",
        height: "2px",
        borderTop: "5px solid #ccccccc",
        background: "#000000",
        borderBottom: "1px solid #C4C4C4",
        ...props.style,
      }}
    />
  );
}
