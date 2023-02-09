import React, { ReactNode } from "react";
import Header from "./Header";
import Panel from "./Panel";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-4.56rem)] flex bg-white">
        <Panel />
        <main className="p-[3.375rem] flex-1">{children}</main>
      </div>
    </div>
  );
}
