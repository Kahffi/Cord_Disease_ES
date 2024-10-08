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
        className="flex gap-5 p-3 rounded-lg bg-green-300 w-full cursor-pointer hover:opacity-85"
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
