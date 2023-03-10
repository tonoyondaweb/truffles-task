import BizForm from "@/components/info/businessForm/BizForm";
import Layout from "@/components/info/layout/Layout";
import UserForm from "@/components/info/userForm/UserForm";
import { TabContext } from "@/lib/Context";
import Head from "next/head";
import { useContext } from "react";

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

export default function Info() {
  const infoContext = useContext(TabContext);
  const { name, desc, index } = infoContext?.infoTab!;

  function nextTab() {
    infoContext?.setInfoTab((prevTab) => {
      const newIndex = prevTab.index < tabs.length - 1 ? prevTab.index + 1 : 0;
      return {
        index: newIndex,
        ...tabs[newIndex],
      };
    });
  }

  function backTab() {
    infoContext?.setInfoTab((prevTab) => {
      const newIndex = prevTab.index - 1;
      return {
        index: newIndex,
        ...tabs[newIndex],
      };
    });
  }

  return (
    <>
      <Head>
        <title>{`Truffles - ${infoContext?.infoTab.name.toUpperCase()}`}</title>
      </Head>
      <Layout>
        <div className="space-y-7">
          <div>
            <h1 className="text-[1.25rem] font-semibold capitalize">{name}</h1>
            <p className="text-[0.875rem] text-gray-custom">{desc}</p>
          </div>
          {(() => {
            switch (index) {
              case 0:
                return <UserForm nextTab={nextTab} />;
              case 2:
                return <BizForm nextTab={nextTab} />;
              default:
                return (
                  <div className="grid">
                    {"Tab under construction :("}
                    <div className="flex justify-between">
                      <button
                        className="py-[0.5625rem] px-[1.625rem] border border-form-border rounded-[6px]"
                        onClick={backTab}
                      >
                        Back
                      </button>
                      <button
                        className="py-[0.5625rem] px-[1.625rem] bg-purple text-white rounded-[6px] cursor-pointer"
                        onClick={nextTab}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                );
            }
          })()}
        </div>
      </Layout>
    </>
  );
}
