import React from "react";
import HeroItem from "./HeroItem";
import { heroContent } from "@/lib/data";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="flex-1 grid grid-cols-2 gap-[20px]">
      {heroContent.map((item, index) => (
        <HeroItem
          key={index + item.title}
          title={item.title}
          value={item.money}
        />
      ))}
    </div>
  );
}
