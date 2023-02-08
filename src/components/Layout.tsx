import { ReactNode } from "react";

export interface IAppProps {
  children: ReactNode;
}

export default function App({ children }: IAppProps) {
  return <div>{children}</div>;
}
