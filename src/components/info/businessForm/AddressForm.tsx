import React, { ChangeEvent } from "react";

type Props = {
  values: {
    address: string;
    zip: string;
    state: string;
    city: string;
  };
  handleInput(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void;
};

export default function AddressForm({ values, handleInput }: Props) {
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
          value={values.address}
          onChange={(e) => handleInput(e)}
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
            value={values.zip}
            onChange={(e) => handleInput(e)}
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
            value={values.state}
            onChange={(e) => handleInput(e)}
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
            value={values.city}
            onChange={(e) => handleInput(e)}
          />
        </div>
      </div>
    </div>
  );
}
