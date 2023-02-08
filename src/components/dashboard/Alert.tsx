import { kycAlert } from "@/lib/data";
import AlertIcon from "../icons/AlertIcon";
import CloseIcon from "../icons/CloseIcon";

type Props = {};

export default function Alert({}: Props) {
  return (
    <div
      role="alert"
      className="bg-purple text-white flex items-center px-[20px] py-[16px] rounded-[8px]"
    >
      <span className="mr-[18.5px]">
        <AlertIcon />
      </span>
      <div className="space-y-[0.25rem]">
        <h3>{kycAlert.title}</h3>
        <p className="text-[0.625em]">{kycAlert.message}</p>
      </div>
      <button className="ml-auto">
        <CloseIcon />
      </button>
    </div>
  );
}
