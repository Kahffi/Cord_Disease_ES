import { useMemo, useState } from "react";
import { Rule } from "./useRule";
import { DISEASES } from "../Constant";

const factsHasAll = (list: string[], facts: Set<string>) =>
  list.every((item) => facts.has(item));

export default function useFacts(rules: Rule[]) {
  const [facts, setFacts] = useState<Set<string>>(new Set([]));
  const [inferredFacts, setInferredFacts] = useState<Set<string>>(new Set([]));

  const decissions = useMemo(() => {
    return DISEASES.filter((disease) => inferredFacts.has(disease.code));
  }, [inferredFacts]);

  //   fungsi ini digunakan untuk me-reset disease code di dalam facts,
  // dikarenakan implementasi saat ini hanya dapat auto-update symptom code
  function clearFacts() {
    setFacts(new Set([]));
    setInferredFacts(new Set([]));
  }

  function addFact(newFact: string) {
    const temp = new Set(facts);
    temp.add(newFact);
    setFacts(temp);
  }
  function deleteFact(target: string) {
    const temp = new Set(facts);
    temp.delete(target);
    setFacts(temp);
  }
  //   karena menggunakan React JS, implementasi method Set yang merubah nilai variable
  //  tidak dapat digunakan secara langsung
  function toggleAnswer(id: string): void {
    if (facts.has(id)) {
      deleteFact(id);
    } else {
      addFact(id);
    }
  }

  function doForwardChaining() {
    const tempInferFacts = new Set<string>([]);

    const tempFacts = new Set<string>(facts);

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

  return {
    facts,
    doForwardChaining,
    toggleAnswer,
    decissions,
    clearFacts,
  };
}
