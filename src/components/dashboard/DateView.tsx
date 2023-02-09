import { upDowns } from "@/lib/data";
import Calendar from "./Calendar";
import DateViewItem from "./DateViewItem";

type Props = {};

export default function DateView({}: Props) {
  return (
    <div className="bg-white w-full rounded-[1rem] lg:w-max xl:max-w-[363.38px] shadow-date-view px-[1.3rem]">
      <Calendar />
      <div className="space-y-[8px]">
        {upDowns.map(({ name, up, money, tfid }, index) => (
          <DateViewItem
            key={index + name}
            name={name}
            up={up}
            money={money}
            tfid={tfid}
          />
        ))}
      </div>
    </div>
  );
}
