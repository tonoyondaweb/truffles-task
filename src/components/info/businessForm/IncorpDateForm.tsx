type Props = {};

export default function IncorpDateForm({}: Props) {
  return (
    <div className="grid">
      <label className="text-xs" htmlFor="incorpDate">
        Incorporation Date
      </label>
      <input
        type="date"
        name="incorpDate"
        id="incorpDate"
        className="border border-form-border h-[2.3125rem] rounded-[6px] w-full px-[0.5rem]"
      />
    </div>
  );
}
