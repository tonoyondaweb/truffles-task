import React from "react";

type Props = {};

export default function IdForm({}: Props) {
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
      />
    </div>
  );
}
