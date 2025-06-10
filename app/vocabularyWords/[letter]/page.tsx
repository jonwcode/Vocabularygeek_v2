"use client";
import { useParams } from "next/navigation";
export default function Page() {
  const { letter } = useParams();
  return <div>{letter}</div>;
}
