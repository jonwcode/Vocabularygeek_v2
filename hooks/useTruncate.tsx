export default function UseTruncate(text: string, maxLength: number): string {
  // Verify that the text is longer then the maxLength
  if (text.length <= maxLength) return text;

  // Truncate the string
  const truncate = text.slice(0, maxLength);

  // Find the space in the truncated string
  const lastSpaceIndex = truncate.lastIndexOf(" ");

  // Clean up any text that might come after the last space
  if (lastSpaceIndex === -1) return ""; // There was no space

  return truncate.slice(0, lastSpaceIndex) + "...";
}
