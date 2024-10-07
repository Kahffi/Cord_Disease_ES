import { useState } from "react";
import { Rule } from "./useRule";
import { ANSWERS_MAP } from "../Constant";

const factsHasAll = (list: string[], facts: Set<string>) =>
  list.every((item) => facts.has(item));

export default function useFacts(rules: Rule[]) {
  const [facts, setFacts] = useState<Set<string>>(new Set([]));
  const [inferredFacts, setInferredFacts] = useState<Set<string>>(new Set([]));

  //   function populateFacts(answers: boolean[]) {
  //     setFacts(
  //       answers.reduce((set, ans, idx) => {
  //         if (ans) {
  //           set.add(ANSWERS_MAP[idx]);
  //         }
  //         return set;
  //       }, new Set<string>([]))
  //     );
  //   }

  function doForwardChaining(answers: boolean[]) {
    const tempInferFacts = new Set<string>([]);
    // const tempFacts = new Set<string>(facts);

    const tempFacts = answers.reduce((set, ans, idx) => {
      if (ans) {
        set.add(ANSWERS_MAP[idx]);
      }
      return set;
    }, new Set<string>([]));

    while (true) {
      let inferred = false;
      for (const rule of rules) {
        if (
          factsHasAll(rule.antecedent, tempFacts) &&
          !tempInferFacts.has(rule.consequent)
        ) {
          tempFacts.add(rule.consequent);
          tempInferFacts.add(rule.consequent);
          inferred = true;
          break;
        }
      }
      if (!inferred) break;
    }

    setFacts(tempFacts);
    setInferredFacts(tempInferFacts);
  }

  return { facts, doForwardChaining, inferredFacts };
}
