import { ChangeEvent, FormEvent, useState } from "react";
import Submit from "../layout/Submit";
import NameForm from "./NameForm";
import IdForm from "./IdForm";
import CountryForm from "./CountryForm";
import CountryOp from "./CountryOp";
import AddressForm from "./AddressForm";
import RegFrom from "./RegFrom";
import IncorpDateForm from "./IncorpDateForm";

type Props = { nextTab(): void };

const initValues = {
  id: "",
  name: "",
  countryCorp: "Afghanistan",
  countryOp: "Afghanistan",
  address: "",
  zip: "",
  state: "",
  city: "",
  regNumber: "",
  incorpDate: new Date().toJSON().slice(0, 10),
};

export default function AdminForm({ nextTab }: Props) {
  const [values, setValues] = useState(initValues);

  function handleInput(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;

    setValues((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault;
    nextTab();
    console.log(values);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="space-y-7">
      <IdForm values={values} handleInput={handleInput} />
      <NameForm values={values} handleInput={handleInput} />
      <div className="flex flex-wrap items-center gap-[1.25rem]">
        <CountryForm values={values} handleInput={handleInput} />
        <CountryOp values={values} handleInput={handleInput} />
      </div>
      <AddressForm values={values} handleInput={handleInput} />
      <RegFrom values={values} handleInput={handleInput} />
      <IncorpDateForm values={values} handleInput={handleInput} />
      <Submit />
    </form>
  );
}
