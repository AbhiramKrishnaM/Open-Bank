import React from "react";
import { Icon } from "@iconify/react";

function PaymentCard(props) {
  return (
    <div className="md:w-64  h-40 ml-3 rounded-lg bg-black  flex flex-col justify-between">
      <div className="text-white text-right p-3 text-[20px]">
        {props.cards.expiryDate}
      </div>
      <div className="flex justify-between px-3">
        <Icon
          icon={props.cards.companyIcon}
          color="white"
          width="50"
          height="50"
        />
        <p className="text-white flex  items-center  font-semibold text-[20px]">
          <span>....</span> <span>{props.cards.cardNumber}</span>
        </p>
      </div>
    </div>
  );
}

export default PaymentCard;
