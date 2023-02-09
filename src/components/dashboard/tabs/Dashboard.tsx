import Alert from "../Alert";

import React from "react";
import Hero from "../Hero";
import DateView from "../DateView";
import { kycAlert } from "@/lib/data";

type Props = {};

export default function Dashboard({}: Props) {
  return (
    <div className="py-1 px-[16px] space-y-[29px]">
      {kycAlert.alert && <Alert />}
      <div className="flex flex-col gap-y-[20px] justify-center lg:flex-row lg:gap-x-[20px]">
        <Hero />
        <DateView />
      </div>
    </div>
  );
}
