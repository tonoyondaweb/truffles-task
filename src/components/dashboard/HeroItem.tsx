import React, { ComponentType } from "react";

type Props = {
  title: string;
  value: number;
  Icon: ComponentType;
};

export default function HeroItem({ title, value, Icon }: Props) {
  return (
    <div className="py-[1.625rem] px-[1.2rem] bg-white shadow-hero-items rounded-[1rem] flex justify-between items-center gap-x-[10px]">
      <div>
        <h4 className="text-gray-custom">{title}</h4>
        <p className="text-[1.2em] font-bold xl:text-[1.5rem]">
          $ {Intl.NumberFormat("en-US").format(value)}
        </p>
      </div>
      <div className="hidden bg-icon-purple w-[3.5rem] h-[3.5rem] rounded-[8px] place-content-center min-[500px]:grid">
        <Icon />
      </div>
    </div>
  );
}
