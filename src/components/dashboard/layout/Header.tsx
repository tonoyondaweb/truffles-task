import TruffleLogo from "../../icons/TruffleLogo";
import UserIcon from "../../icons/UserIcon";
import BellIcon from "../../icons/BellIcon";
import { useContext } from "react";
import { TabContext } from "@/lib/Context";
import Link from "next/link";

export default function App() {
  const tabContext = useContext(TabContext);
  return (
    <header className="flex items-center pt-[27px] px-[49px] pb-[46px] sticky top-0 z-[1] bg-background">
      <TruffleLogo />
      <h1 className="text-lg font-bold ml-[89px] capitalize">
        {tabContext?.tab}
      </h1>
      <div className="flex items-center ml-auto">
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
    </header>
  );
}
