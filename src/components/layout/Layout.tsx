import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export interface IAppProps {
  children: ReactNode;
}

export default function App({ children }: IAppProps) {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
