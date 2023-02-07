import React from "react";
import { Icon } from "@iconify/react";
export default function RemainingFunds({ data }) {
  return (
    <div className="flex bg-slate-100 items-center p-5 w-4/12 rounded-lg">
      <div className=" mr-5 h-12 w-12 bg-black rounded-full flex  justify-center items-center">
        <Icon
          icon="material-symbols:list-alt-outline"
          width="30"
          height="30"
          color="white"
        />
      </div>

      <div>
        <p>
          You have ${data.amount} remaining funds <br /> over the next{" "}
          {data.days}
          days.
        </p>
        <p className="text-blue-600 flex  items-center">
          <span className="mr-2">View Details</span>
          <Icon icon="ic:twotone-chevron-right" />
        </p>
      </div>
    </div>
  );
}
