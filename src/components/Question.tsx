import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  index: number;
  onChange: (idx: number) => void;
};

export default function Question({
  index,
  children,
  onChange: toggleAnswer,
}: Props) {
  return (
    <div>
      <label
        htmlFor={`answer${index}`}
        
        className="flex gap-10 p-3 bg-green-200 w-96 sm:w-[35rem] max-w-[40rem] cursor-pointer hover:opacity-85"
      >
        <input type="checkbox" onChange={() => toggleAnswer(index)} name={`answer${index}`} id={`answer${index}`} />
        {children}
      </label>
    </div>
  );
}
