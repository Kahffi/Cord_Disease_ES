// import { useMemo, useState } from "react";
// import { Questions } from "./Constant";
import Question from "./components/Question";
import useRule from "./hooks/useRule";
import useFacts from "./hooks/useFacts";
import { SYMPTOMS } from "./Constant";
import { useRef } from "react";
import left_arrow from "./assets/left_arrow.svg";

function App() {
  const { rules } = useRule();
  const { doForwardChaining, toggleAnswer, decissions, clearFacts } =
    useFacts(rules);

  const session = useRef<"questions" | "conclussion">("questions");

  function evaluateFacts() {
    session.current = "conclussion";
    doForwardChaining();
  }

  return (
    <div className="bg-slate-800 min-h-screen ">
      {session.current === "questions" && (
        <div className="flex flex-col w-full items-center p-5 sm:py-10 gap-16">
          <h1 className="text-white font-bold text-2xl sm:text-3xl">
            Corn Plant Disease Detector
          </h1>
          <div className="flex flex-col gap-3 max-w-80 sm:max-w-[40rem] bg-slate-600 p-3 sm:py-5 sm:px-16  rounded-xl shadow-lg">
            <p className="text-white mb-3">
              Pilihlah pernyataan yang benar di bawah ini berdasarkan kondisi
              tanaman anda
            </p>
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
            className="py-2 px-10 w-44 bg-slate-700 text-white rounded-md hover:opacity-80 shadow-lg"
          >
            Evaluasi
          </button>
        </div>
      )}
      {/* conclussion */}
      {session.current === "conclussion" && (
        <div className="text-white flex flex-col w-full items-center p-5 gap-5">
          <div className="flex justify-center w-full relative">
            <button
              type="button"
              onClick={() => {
                session.current = "questions";
                clearFacts();
              }}
              className="absolute bottom-1/2 left-0 translate-y-1/2"
            >
              <img src={left_arrow} alt="" className="w-8" />
            </button>
            <h2 className="text-2xl">Hasil Evaluasi</h2>
          </div>

          <div
            className={`flex flex-col w-80 sm:w-96 sm:max-w-[40rem] bg-slate-600 p-5 shadow-lg rounded-xl overflow-auto h-[500px] ${
              decissions.length < 1 ? "justify-center" : "justify-start"
            }`}
          >
            {decissions.length > 0 ? (
              <>
                <p className="mb-2 text-lg">Penyakit Terdeteksi:</p>
                <ol>
                  {decissions.map((decission) => (
                    <li
                      key={decission.code}
                      className="list-decimal list-inside"
                    >
                      {decission.name}
                    </li>
                  ))}
                </ol>
              </>
            ) : (
              <p>Tanaman kamu tidak memiliki penyakit</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
