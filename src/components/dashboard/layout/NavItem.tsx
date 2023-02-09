import { TabContext } from "@/lib/Context";
import { ComponentType, useContext } from "react";

interface IconProps {
  className: string;
}

export interface IAppProps {
  Icon: ComponentType<IconProps>;
  name: string;
}

export default function NavItem({ Icon, name }: IAppProps) {
  const tabContext = useContext(TabContext);
  const { tab, setTab } = tabContext!;

  const active = tab === name ? true : false;

  return (
    <li>
      <button
        className={`rounded-[8px] transition-colors w-full flex items-center py-[12px] px-[16px] ${
          active ? "bg-white" : null
        } hover:bg-gray-200`}
        onClick={() => setTab(name)}
        aria-label={"Navigate to " + tab}
      >
        <div
          className={`h-[2rem] w-[2rem] grid place-content-center rounded-[8px] transition-all ${
            active ? "bg-icon-purple " : "bg-white shadow-nav-icon"
          }`}
        >
          <Icon className={active ? "fill-white" : "fill-dark-gray"} />
        </div>
        <span className="hidden ml-[12px] capitalize md:block">{name}</span>
      </button>
    </li>
  );
}
