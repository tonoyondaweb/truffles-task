import { TabContext } from "@/lib/Context";
import { useContext } from "react";
import Layout from "../components/dashboard/layout/Layout";
import DashBoard from "../components/dashboard/tabs/Dashboard";
import Invoice from "../components/dashboard/tabs/Invoice";
import Proforma from "../components/dashboard/tabs/Proforma";
import Swap from "../components/dashboard/tabs/Swap";
import Transfer from "../components/dashboard/tabs/Transfer";
import Contact from "../components/dashboard/tabs/Contact";

export default function Index() {
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
}
