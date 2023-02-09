type Props = {};

export default function NameForm({}: Props) {
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
      />
    </div>
  );
}
