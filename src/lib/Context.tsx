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
  infoTab: {
    index: number;
    name: string;
    desc: string;
  };
  setTab: Dispatch<SetStateAction<string>>;
  setInfoTab: Dispatch<
    SetStateAction<{
      index: number;
      name: string;
      desc: string;
    }>
  >;
}

export const TabContext = createContext<TabContextType | null>(null);

export default function Context({ children }: IAppProps) {
  const [tab, setTab] = useState("dashboard");
  const [infoTab, setInfoTab] = useState({
    index: 0,
    name: "user information",
    desc: "Please enter your details",
  });

  return (
    <TabContext.Provider value={{ tab, infoTab, setTab, setInfoTab }}>
      {children}
    </TabContext.Provider>
  );
}
