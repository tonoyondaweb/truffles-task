import { ChangeEvent } from "react";

type Props = {
  values: {
    name: string;
  };
  handleInput(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void;
};

export default function NameForm({ values, handleInput }: Props) {
  return (
    <div className="grid">
      <label className="text-xs" htmlFor="companyName">
        Company Name
      </label>
      <input
        type="text"
        name="name"
        id="companyName"
        className="border border-form-border h-[2.3125rem] rounded-[6px] w-full px-[0.5rem]"
        value={values.name}
        onChange={(e) => handleInput(e)}
      />
    </div>
  );
}
