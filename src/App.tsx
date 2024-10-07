import { useState } from "react";
import { Questions } from "./Constant";
import Question from "./components/Question";
import useRule from "./hooks/useRule";

function App() {
  const [answers, setAnswers] = useState<boolean[]>(Questions.map(() => false));
  const { rules } = useRule();

  function toggleAnswer(idx: number): void {
    const temp = [...answers];
    temp[idx] = !temp[idx];
    setAnswers(temp);
  }

  console.log(rules);

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
          className="py-3 px-10 w-44 bg-slate-700 text-white rounded-md"
        >
          Evaluate
        </button>
      </div>
    </div>
  );
}

export default App;
