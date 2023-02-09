import React, { ChangeEvent } from "react";

type Props = {
  values: {
    id: string;
  };
  handleInput(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void;
};

export default function IdForm({ values, handleInput }: Props) {
  return (
    <div>
      <label className="text-xs" htmlFor="id">
        Account ID
      </label>
      <input
        type="text"
        name="id"
        id="id"
        className="border border-form-border h-[2.3125rem] rounded-[6px] w-full px-[0.5rem]"
        value={values.id}
        onChange={(e) => handleInput(e)}
      />
    </div>
  );
}
