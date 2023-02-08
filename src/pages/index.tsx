import { TabContext } from "@/lib/Context";
import { useContext } from "react";
import Layout from "../components/layout/Layout";
import DashBoard from "../components/tabs/Dashboard";
import Invoice from "../components/tabs/Invoice";
import Proforma from "../components/tabs/Proforma";
import Swap from "../components/tabs/Swap";
import Transfer from "../components/tabs/Transfer";
import Contact from "../components/tabs/Contact";

const Index = () => {
  const tabContext = useContext(TabContext);

  return (
    <Layout>
      <div>
        {(() => {
          switch (tabContext?.tab) {
            case "dashboard":
              return <DashBoard />;
            case "invoice":
              return <Invoice />;
            case "proforma":
              return <Proforma />;
            case "swap":
              return <Swap />;
            case "transfer":
              return <Transfer />;
            case "contact":
              return <Contact />;
            default:
              return null;
          }
        })()}
      </div>
    </Layout>
  );
};

export default Index;
