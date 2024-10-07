import { useState } from "react";

export default function useFacts() {
  const [facts, setFacts] = useState<string[]>([]);
}
