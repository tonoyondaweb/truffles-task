import { ChangeEvent, FormEvent, useContext, useState } from "react";
import Submit from "../layout/Submit";
import DobPicker from "./DobPicker";
import GenderForm from "./GenderForm";
import NameForm from "./NameForm";
import NationalityForm from "./NationalityForm";
import OccupForm from "./OccupForm";
import PhoneForm from "./PhoneForm";

type Props = {
  nextTab(): void;
};

const initValues = {
  title: "mr",
  firstName: "",
  lastName: "",
  phone: "",
  gender: "male",
  nationality: "afghan",
  occupation: "",
  dateOfBirth: new Date().toJSON().slice(0, 10),
};

export default function UserForm({ nextTab }: Props) {
  const [values, setvalues] = useState(initValues);

  function handleInput(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;

    setvalues((prevValues) => {
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
    <form className="space-y-5 text-sm" onSubmit={(e) => handleSubmit(e)}>
      <NameForm values={values} handleInput={handleInput} />
      <PhoneForm values={values} handleInput={handleInput} />
      <GenderForm values={values} handleInput={handleInput} />
      <NationalityForm values={values} handleInput={handleInput} />
      <OccupForm values={values} handleInput={handleInput} />
      <DobPicker values={values} handleInput={handleInput} />
      <Submit />
    </form>
  );
}
