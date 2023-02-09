import TruffleLogo from "@/components/icons/TruffleLogo";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="flex justify-between items-center py-[1.35rem] px-[0.8rem] border-b sticky top-0 bg-background z-[1]">
      <Link href="/">
        <TruffleLogo />
      </Link>
      <div className="flex items-center gap-x-[0.5rem] text-xs">
        <p>Having Trouble?</p>
        <button className="text-purple font-semibold">Get Help</button>
      </div>
    </div>
  );
}
