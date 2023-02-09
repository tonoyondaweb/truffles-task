import { TabContext } from "@/lib/Context";
import React, { useContext } from "react";

const tabs = [
  {
    name: "user information",
    desc: "Please enter your details",
  },
  {
    name: "admin and operations",
    desc: "",
  },
  {
    name: "business information",
    desc: "Use a permanent address where you can receive mail.",
  },
  {
    name: "upload documents",
    desc: "",
  },
];

export default function Submit() {
  const infoContext = useContext(TabContext);

  function backTab() {
    infoContext?.setInfoTab((prevTab) => {
      const newIndex = prevTab.index - 1;
      return {
        index: newIndex,
        ...tabs[newIndex],
      };
    });
  }

  return (
    <div className="flex justify-between">
      {infoContext?.infoTab.index! > 0 && (
        <button
          className="py-[0.5625rem] px-[1.625rem] border border-form-border rounded-[6px]"
          onClick={backTab}
        >
          Back
        </button>
      )}
      <input
        type="submit"
        value="Next"
        className="py-[0.5625rem] px-[1.625rem] bg-purple text-white rounded-[6px] cursor-pointer"
      />
    </div>
  );
}
