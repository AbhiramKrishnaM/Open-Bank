import React from "react";
import { Icon } from "@iconify/react";

function UpcomingBills(props) {
  return (
    <div
      className="sm:w-40 w-36 h-54  ml-4 mt-4 px-6  pt-6 pb-4 rounded-xl"
      style={{ backgroundColor: props.bills.bgcolor }}
    >
      <Icon icon={props.bills.icon} width="40" height="40" />
      <h5 className="mt-2">{props.bills.heading}</h5>
      <h1 className="mt-6 font-bold text-xl">$ {props.bills.price}</h1>
      <p className="text-gray-500">/mo</p>
    </div>
  );
}

export default UpcomingBills;
