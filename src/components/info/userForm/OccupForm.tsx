import { ChangeEvent } from "react";

type Props = {
  handleInput(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void;
  values: {
    occupation: string;
  };
};

export default function OccupForm({ values, handleInput }: Props) {
  return (
    <div>
      <label htmlFor="occupation">Occupation</label>
      <input
        type="text"
        name="occupation"
        id="occupation"
        value={values.occupation}
        onChange={(e) => handleInput(e)}
        className="border border-form-border h-[2.3125rem] rounded-[6px] w-full px-[0.5rem]"
      />
    </div>
  );
}
