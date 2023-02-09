import DoneIcon from "@/components/icons/DoneIcon";
import { TabContext } from "@/lib/Context";
import { useContext } from "react";

type Props = {
  index: number;
  name: string;
  desc: string;
};

export default function PanelItem({ name, index }: Props) {
  const infoContext = useContext(TabContext);
  return (
    <li className="flex items-start group gap-x-[1rem]">
      <div className="flex flex-col items-center">
        <div
          className={`border-[2px] h-[1.7rem] w-[1.7rem] rounded-full grid place-items-center ${
            index < infoContext?.infoTab.index!
              ? "bg-purple border-purple"
              : null
          } ${index === infoContext?.infoTab.index! ? "border-purple" : null}`}
        >
          {index < infoContext?.infoTab.index! && <DoneIcon />}
          {index === infoContext?.infoTab.index! && (
            <div className="bg-purple h-[0.5rem] w-[0.5rem] rounded-full"></div>
          )}
        </div>
        <hr
          className={`h-[4rem] w-[2px] group-last:hidden ${
            index < infoContext?.infoTab.index! ? "bg-purple" : "bg-panel-lines"
          }`}
        />
      </div>
      <p
        className={`mt-[1px] text-[0.75rem] uppercase text-gray-custom opacity-60 ${
          index <= infoContext?.infoTab.index! ? "text-black opacity-100" : null
        }`}
      >
        {name}
      </p>
    </li>
  );
}
