import { useEffect, useState } from "react";
import KB from "../knowledge_base.txt";
export type Rule = {
  antecedent: string[];
  consequent: string;
};

export default function useRule() {
  const [rules, setRules] = useState<Rule[]>([]);

  useEffect(() => {
    async function fetchKB() {
      try {
        const res = await fetch(KB);
        const data = await res.text();
        // splitting text from new line
        const lines = data.split("\n");
        const tempRules: Rule[] = [];
        lines.forEach((line) => {
          tempRules.push({
            consequent: line.split("-")[1],
            antecedent: [...line.split("-")[0].split(",")],
          });
        });

        setRules(tempRules);

        // convert text i
      } catch (e) {
        console.error(e);
      }
    }
    fetchKB();
  }, []);

  return { rules };
}
