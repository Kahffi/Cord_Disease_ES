import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  id: string;
  onChange: (id: string) => void;
};

export default function Question({
  id,
  children,
  onChange: toggleAnswer,
}: Props) {
  return (
    <div>
      <label
        htmlFor={id}
        className="flex gap-10 p-3 bg-green-200 w-96 sm:w-[35rem] max-w-[40rem] cursor-pointer hover:opacity-85"
      >
        <input
          type="checkbox"
          onChange={() => toggleAnswer(id)}
          name={`symptom ${id}`}
          id={id}
        />
        {children}
      </label>
    </div>
  );
}
