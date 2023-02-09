import React from "react";
import HeroItem from "./HeroItem";
import { heroContent } from "@/lib/data";
import Chart from "./Chart";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="flex-1 space-y-[2rem]">
      <div className="flex-1 grid grid-cols-2 gap-[20px] h-max">
        {heroContent.map((item, index) => (
          <HeroItem
            key={index + item.title}
            title={item.title}
            value={item.money}
          />
        ))}
      </div>
      <Chart />
    </div>
  );
}
