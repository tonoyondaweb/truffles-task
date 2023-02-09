import React, { ChangeEvent } from "react";

type Props = {
  handleInput(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void;
  values: {
    title: string;
    firstName: string;
    lastName: string;
  };
};

export default function NameForm({ handleInput, values }: Props) {
  return (
    <div className="flex flex-wrap gap-[0.5rem] w-full">
      <div className="grid">
        <label className="text-xs" htmlFor="title">
          Title
        </label>
        <select
          name="title"
          className="w-max border border-form-border h-[2.3125rem] rounded-[6px] px-[0.5rem]"
          value={values.title}
          onChange={(e) => handleInput(e)}
        >
          <option value="mr">Mr.</option>
          <option value="ms">Ms.</option>
          <option value="mrs">Mrs.</option>
        </select>
      </div>
      <div className="grid flex-1">
        <label className="text-xs" htmlFor="firstName">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          className="border border-form-border h-[2.3125rem] rounded-[6px] px-[0.5rem]"
          value={values.firstName}
          onChange={(e) => handleInput(e)}
        />
      </div>
      <div className="grid flex-1">
        <label className="text-xs" htmlFor="lastName">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          className="border border-form-border h-[2.3125rem] rounded-[6px] px-[0.5rem]"
          value={values.lastName}
          onChange={(e) => handleInput(e)}
        />
      </div>
    </div>
  );
}
