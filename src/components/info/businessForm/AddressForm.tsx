import React from "react";

type Props = {};

export default function AddressForm({}: Props) {
  return (
    <div className="space-y-7">
      <div className="grid">
        <label className="text-xs" htmlFor="address">
          Company Address
        </label>
        <input
          type="text"
          name="address"
          id="address"
          className="border border-form-border h-[2.3125rem] rounded-[6px] w-full px-[0.5rem]"
        />
      </div>
      <div className="flex flex-wrap gap-[0.5rem]">
        <div className="grid flex-1 min-w-[250px]">
          <label className="text-xs" htmlFor="zip">
            ZIP/Postal
          </label>
          <input
            type="number"
            name="zip"
            id="zip"
            className="border border-form-border h-[2.3125rem] rounded-[6px] w-full px-[0.5rem]"
          />
        </div>
        <div className="grid flex-1 min-w-[250px]">
          <label className="text-xs" htmlFor="state">
            State/Province
          </label>
          <input
            type="text"
            name="state"
            id="state"
            className="border border-form-border h-[2.3125rem] rounded-[6px] w-full px-[0.5rem]"
          />
        </div>
        <div className="grid flex-1 min-w-[250px]">
          <label className="text-xs" htmlFor="city">
            City
          </label>
          <input
            type="text"
            name="city"
            id="city"
            className="border border-form-border h-[2.3125rem] rounded-[6px] w-full px-[0.5rem]"
          />
        </div>
      </div>
    </div>
  );
}
