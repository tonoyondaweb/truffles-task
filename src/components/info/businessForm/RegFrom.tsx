import { ChangeEvent } from "react";

type Props = {
  values: {
    regNumber: string;
  };
  handleInput(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void;
};

export default function RegFrom({ values, handleInput }: Props) {
  return (
    <div className="grid">
      <label className="text-xs" htmlFor="regNumber">
        Registration Number
      </label>
      <input
        type="number"
        name="regNumber"
        id="regNumber"
        className="border border-form-border h-[2.3125rem] rounded-[6px] w-full px-[0.5rem]"
        value={values.regNumber}
        onChange={(e) => handleInput(e)}
      />
    </div>
  );
}
