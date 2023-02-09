import React from "react";
import PanelItem from "./PanelItem";

type Props = {};

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

export default function Panel({}: Props) {
  return (
    <div className="bg-panel-background sticky top-[4.56rem] h-[calc(100vh-4.56rem)] p-[1rem]">
      <ul>
        {tabs.map((item, index) => (
          <PanelItem
            key={index}
            index={index}
            name={item.name}
            desc={item.desc}
          />
        ))}
      </ul>
    </div>
  );
}
