import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export interface IAppProps {
  children: ReactNode;
}

interface TabContextType {
  tab: string;
  setTab: Dispatch<SetStateAction<string>>;
}

export const TabContext = createContext<TabContextType | null>(null);

export default function Context({ children }: IAppProps) {
  const [tab, setTab] = useState("dashboard");

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
}
