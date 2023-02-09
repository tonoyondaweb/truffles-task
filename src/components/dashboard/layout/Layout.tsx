import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export interface IAppProps {
  children: ReactNode;
}

export default function App({ children }: IAppProps) {
  return (
    <div className="max-w-[1900px] mx-auto">
      <Header />
      <div className="flex min-h-[calc(100vh-6.3rem)]">
        <Sidebar />
        <main className="flex-1 pb-5">{children}</main>
      </div>
    </div>
  );
}
