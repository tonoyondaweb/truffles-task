import TruffleLogo from "../../icons/TruffleLogo";
import UserIcon from "../../icons/UserIcon";
import BellIcon from "../../icons/BellIcon";
import { useContext } from "react";
import { TabContext } from "@/lib/Context";
import Link from "next/link";

export default function App() {
  const tabContext = useContext(TabContext);
  return (
    <header className="flex items-center justify-between pt-[27px] px-[1.8rem] pb-[46px] sticky top-0 z-[1] bg-background">
      <div className="xl:w-[288px]">
        <TruffleLogo />
      </div>
      <div className="flex-1 flex justify-between">
        <h1 className="text-lg font-bold capitalize">{tabContext?.tab}</h1>
        <div className="flex items-center gap-x-[0.5rem] ml-auto">
          <button>
            <UserIcon />
          </button>
          <Link href="/info">
            <span className="ml-[6px] mr-[10px] text-gray-custom">
              Tanay Lodh
            </span>
          </Link>
          <button>
            <BellIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
