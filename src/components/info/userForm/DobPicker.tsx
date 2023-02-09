import { ChangeEvent } from "react";

type Props = {
  handleInput(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void;
  values: {
    dateOfBirth: string;
  };
};

export default function DobPicker({ values, handleInput }: Props) {
  return (
    <div className="grid">
      <label htmlFor="dateOfBirth">Date of Birth</label>
      <input
        type="date"
        name="dateOfBirth"
        id="dateOfBirth"
        value={values.dateOfBirth}
        onChange={(e) => handleInput(e)}
        className="border border-form-border h-[2.3125rem] rounded-[6px] w-full px-[0.5rem]"
      />
    </div>
  );
}
