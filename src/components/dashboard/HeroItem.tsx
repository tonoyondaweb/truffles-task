import React from "react";

type Props = {
  title: string;
  value: number;
};

export default function HeroItem({ title, value }: Props) {
  return (
    <div className="py-[28px] px-[24px] bg-white shadow-hero-items rounded-[1rem]">
      <h4 className="text-gray-custom">{title}</h4>
      <p className="text-[1.5em] font-bold">
        $ {Intl.NumberFormat("en-US").format(value)}
      </p>
    </div>
  );
}
