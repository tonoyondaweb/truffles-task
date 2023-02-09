import { ChangeEvent } from "react";

type Props = {
  handleInput(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void;
  values: {
    gender: string;
  };
};

export default function GenderForm({ values, handleInput }: Props) {
  return (
    <div>
      <label htmlFor="gender">Gender</label>
      <select
        name="gender"
        value={values.gender}
        onChange={(e) => handleInput(e)}
        className="border border-form-border h-[2.3125rem] rounded-[6px] w-full px-[0.5rem]"
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="transgender">Transgender</option>
        <option value="non-binary">Non-binary/non-conforming</option>
        <option value="nota">Prefer not to disclose</option>
      </select>
    </div>
  );
}
