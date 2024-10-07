// import { useMemo, useState } from "react";
// import { Questions } from "./Constant";
import Question from "./components/Question";
import useRule from "./hooks/useRule";
import useFacts from "./hooks/useFacts";
import { SYMPTOMS } from "./Constant";

function App() {
  const { rules } = useRule();
  const { facts, doForwardChaining, addFact, deleteFact, decissions } =
    useFacts(rules);

  function toggleAnswer(id: string): void {
    if (facts.has(id)) {
      deleteFact(id);
    } else {
      addFact(id);
    }
  }

  console.log(facts);

  return (
    <div className="bg-slate-800 min-h-screen">
      <div className="flex flex-col w-full items-center p-5 gap-5">
        <div>
          {SYMPTOMS.map((symptom) => {
            return (
              <Question
                key={symptom.code}
                id={symptom.code}
                onChange={toggleAnswer}
              >
                {symptom.name}
              </Question>
            );
          })}
        </div>
        <button
          type="button"
          onClick={doForwardChaining}
          className="py-3 px-10 w-44 bg-slate-700 text-white rounded-md"
        >
          Evaluate
        </button>
        {decissions.length > 0 &&
          decissions.map((decission) => (
            <p key={decission.code}>{decission.name}</p>
          ))}
      </div>
    </div>
  );
}

export default App;
