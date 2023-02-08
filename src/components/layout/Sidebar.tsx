import Item from "./NavItem";
import DashboardIcon from "../icons/nav/DashboardIcon";
import InvoiceIcon from "../icons/nav/InvoiceIcon";
import ProformaIcon from "../icons/nav/ProformaIcon";
import SwapIcon from "../icons/nav/SwapIcon";
import TransferIcon from "../icons/nav/TransferIcon";
import ContactsIcon from "../icons/nav/ContactsIcon";

export interface IAppProps {}

export default function Sidebar(props: IAppProps) {
  return (
    <div className="w-[288px] px-[16px]">
      <nav>
        <ul className="space-y-[5px]">
          <Item Icon={DashboardIcon} name="dashboard"></Item>
          <Item Icon={InvoiceIcon} name="invoice"></Item>
          <Item Icon={ProformaIcon} name="proforma"></Item>
          <Item Icon={SwapIcon} name="swap"></Item>
          <Item Icon={TransferIcon} name="transfer"></Item>
          <Item Icon={ContactsIcon} name="contact"></Item>
        </ul>
      </nav>
    </div>
  );
}
