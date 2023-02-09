import { ChangeEvent } from "react";

type Props = {
  handleInput(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void;
  values: {
    phone: string;
  };
};

export default function PhoneForm({ values, handleInput }: Props) {
  return (
    <div>
      <label htmlFor="phone" className="text-xs">
        Mobile Number
      </label>
      <div className="border border-form-border rounded-[6px] px-[0.5rem]">
        <input
          className="w-full h-[2.3125rem] rounded"
          type="number"
          name="phone"
          id="phone"
          placeholder="+1 (555) 987-6543"
          value={values.phone}
          onChange={(e) => handleInput(e)}
        />
      </div>
    </div>
  );
}
