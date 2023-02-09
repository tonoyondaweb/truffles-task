import { FormEvent } from "react";
import Submit from "../layout/Submit";
import NameForm from "./NameForm";
import IdForm from "./IdForm";
import CountryForm from "./CountryForm";
import CountryOp from "./CountryOp";
import AddressForm from "./AddressForm";
import RegFrom from "./RegFrom";
import IncorpDateForm from "./IncorpDateForm";

type Props = { nextTab(): void };

export default function AdminForm({ nextTab }: Props) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault;
    nextTab();
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="space-y-7">
      <IdForm />
      <NameForm />
      <div className="flex flex-wrap items-center gap-[1.25rem]">
        <CountryForm />
        <CountryOp />
      </div>
      <AddressForm />
      <RegFrom />
      <IncorpDateForm />
      <Submit />
    </form>
  );
}
