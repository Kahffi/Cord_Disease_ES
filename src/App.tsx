import { useState } from "react";
import { Questions } from "./Constant";
import Question from "./components/Question";
import useRule from "./hooks/useRule";
import useFacts from "./hooks/useFacts";

function App() {
  const [answers, setAnswers] = useState<boolean[]>(Questions.map(() => false));
  const { rules } = useRule();
  const { facts, doForwardChaining, inferredFacts } = useFacts(rules);

  function toggleAnswer(idx: number): void {
    const temp = [...answers];
    temp[idx] = !temp[idx];
    setAnswers(temp);
  }

  return (
    <div className="bg-slate-800 min-h-screen">
      <div className="flex flex-col w-full items-center p-5 gap-5">
        <div>
          {Questions.map((question, idx) => {
            return (
              <Question key={`q${idx}`} onChange={toggleAnswer} index={idx}>
                {question}
              </Question>
            );
          })}
        </div>
        <button
          type="button"
          onClick={() => {
            doForwardChaining(answers);
          }}
          className="py-3 px-10 w-44 bg-slate-700 text-white rounded-md"
        >
          Evaluate
        </button>
        {facts.size > 0 && (
          <p className="text-2xl">
            {facts} <span>{inferredFacts}</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
