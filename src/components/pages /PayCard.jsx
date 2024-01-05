import React from "react";
import { Icon } from "@iconify/react";

function PayCard(props) {
  return (
    <div className="flex gap-9 bg-slate-100  w-fit px-3 py-4 rounded-lg">
      <div className=" my-auto ">
        <Icon icon="icon-park-solid:pie-two" width="40" height="40" />
      </div>
      <div>
        <h5 className="text-gray-500"> Piggybank</h5>
        <h2 className=" font-bold">$ {props.payCard.piggyBank}</h2>
      </div>
      <div>
        <h5 className="text-gray-500">Payment</h5>
        <h2 className="font-bold">$ {props.payCard.payment}</h2>
      </div>
      <div className="flex items-center">
        <div className="bg-white w-fit p-2 rounded-md">
          <Icon icon="ph:question" />
        </div>
        <button
          type="button"
          className="text-white bg-black hover:bg-gray-900  font-medium rounded-md text-sm px-6 py-2.5 ml-3 "
        >
          Pay
        </button>
      </div>
    </div>
  );
}

export default PayCard;
