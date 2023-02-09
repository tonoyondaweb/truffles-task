import React from "react";
import FallIcon from "../icons/FallIcon";
import RiseIcon from "../icons/RiseIcon";

type Props = {
  name: string;
  up: boolean;
  money: number;
  tfid: string;
};

export default function DateViewItem({ name, up, money, tfid }: Props) {
  return (
    <div className="flex items-center justify-between py-[0.64rem] px-[1.08rem]">
      {up ? <RiseIcon /> : <FallIcon />}
      <div>
        <p className="text-lg">{name}</p>
        <p className="text-xs">TSFID: {tfid}</p>
      </div>
      <p>$ {Intl.NumberFormat("en-US").format(money)}</p>
    </div>
  );
}
