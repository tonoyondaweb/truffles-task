import { TabContext } from "@/lib/Context";
import Head from "next/head";
import { useContext } from "react";
import Layout from "../components/dashboard/layout/Layout";
import DashBoard from "../components/dashboard/tabs/Dashboard";

export default function Index() {
  const tabContext = useContext(TabContext);

  return (
    <>
      <Head>
        <title>{`Truffles - ${tabContext?.tab.toUpperCase()}`}</title>
      </Head>
      <Layout>
        <div>
          {(() => {
            switch (tabContext?.tab) {
              case "dashboard":
                return <DashBoard />;
              default:
                return (
                  <div className="capitalize text-center">
                    {tabContext?.tab + " page under construction :("}
                  </div>
                );
            }
          })()}
        </div>
      </Layout>
    </>
  );
}
