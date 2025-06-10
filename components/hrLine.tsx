import { Box } from "@/common";
export default function HrLine({ mt, mb }: { mb?: number; mt?: number }) {
  return (
    <Box
      style={{
        width: "100%",
        height: "2px",
        background: "var(--borderColor)",
        borderBottom: "1px solid var(--secondary-borderColor)",
        ...(mt && { paddingTop: mt }),
        ...(mb && { marginBottom: mb }),
      }}
    />
  );
}
