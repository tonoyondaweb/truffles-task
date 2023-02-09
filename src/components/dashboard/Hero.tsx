import React from "react";
import HeroItem from "./HeroItem";
import { heroContent } from "@/lib/data";
import Chart from "./Chart";
import FiatIcon from "../icons/heroIcons/FiatIcon";
import CryptoIcon from "../icons/heroIcons/CryptoIcon";
import ReceiveIcon from "../icons/heroIcons/ReceiveIcon";
import PayIcon from "../icons/heroIcons/PayIcon";

export default function Hero() {
  return (
    <div className="flex-1 space-y-[2rem] max-w-[900px]">
      <div className="flex-1 grid grid-cols-2 gap-[20px] h-max">
        <HeroItem
          Icon={FiatIcon}
          title={heroContent[0].title}
          value={heroContent[0].money}
        />
        <HeroItem
          Icon={CryptoIcon}
          title={heroContent[1].title}
          value={heroContent[1].money}
        />
        <HeroItem
          Icon={ReceiveIcon}
          title={heroContent[2].title}
          value={heroContent[2].money}
        />
        <HeroItem
          Icon={PayIcon}
          title={heroContent[3].title}
          value={heroContent[3].money}
        />
      </div>
      <Chart />
    </div>
  );
}
