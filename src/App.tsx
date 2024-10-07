// import { useMemo, useState } from "react";
// import { Questions } from "./Constant";
import Question from "./components/Question";
import useRule from "./hooks/useRule";
import useFacts from "./hooks/useFacts";
import { SYMPTOMS } from "./Constant";
import { useRef } from "react";

function App() {
  const { rules } = useRule();
  const { facts, doForwardChaining, toggleAnswer, decissions, clearFacts } =
    useFacts(rules);

  const session = useRef<"questions" | "conclussion">("questions");

  function evaluateFacts() {
    session.current = "conclussion";
    doForwardChaining();
  }

  console.log(facts, "facts");
  console.log(decissions, "decissions");

  return (
    <div className="bg-slate-800 min-h-screen">
      {session.current === "questions" && (
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
            onClick={evaluateFacts}
            className="py-2 px-10 w-44 bg-slate-700 text-white rounded-md"
          >
            Evaluate
          </button>
        </div>
      )}
      {/* conclussion */}
      {session.current === "conclussion" && (
        <div className="text-white flex flex-col w-full items-center p-5 gap-5">
          <div>
            <h2 className="text-2xl">Hasil Evaluasi</h2>

            {decissions.length > 0 ? (
              <>
                <p>Tanaman kamu memiliki {decissions.length} penyakit: </p>
                <ul>
                  {decissions.map((decission) => (
                    <li key={decission.code}>{decission.name}</li>
                  ))}
                </ul>
              </>
            ) : (
              <p>Tanaman kamu tidak memiliki penyakit</p>
            )}
          </div>
          <button
            type="button"
            onClick={() => {
              session.current = "questions";
              clearFacts();
            }}
            className="bg-gray-700 py-2 px-10 rounded-lg"
          >
            Kembali
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
