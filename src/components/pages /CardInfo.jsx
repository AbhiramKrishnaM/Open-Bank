import React from "react";
import { Icon } from "@iconify/react";

function CardInfo(props) {
  return (
    <div className=" w-fit p-3">
      <div className="flex gap-10 justify-between mb-6">
        <h1 className="font-bold">{props.cardInfo.heading}</h1>
        <div className="flex gap-2">
          <button className="p-1 bg-slate-100  rounded-md">
            <Icon icon="gridicons:pages" />
          </button>

          <button className="bg-slate-100 p-1 rounded-md">
            <Icon icon="material-symbols:arrows-more-up" />
          </button>
        </div>
      </div>
      <div className="flex gap-10">
        <div className="flex bg-slate-100  items-center gap-5 p-2 rounded-xl">
          <div>
            <p className="font-bold">.... {props.cardInfo.cardNumber}</p>

            <h4 className="text-[10px] flex gap-3 ">
              <span>{props.cardInfo.expiryDate}</span>
              <span className="text-blue-400">CVV code</span>
            </h4>
          </div>
          <button>
            <Icon icon="material-symbols:settings-outline-rounded" />
          </button>
        </div>
        <div>
          <h5 className="text-gray-400">Cash available</h5>
          <p className="font-bold">$ {props.cardInfo.cashAvailable}</p>
        </div>
        <div>
          <h5 className="text-gray-400">Credit Limit</h5>
          <p className="font-bold">$ {props.cardInfo.creditLimit}</p>
        </div>
        <div>
          <h5 className="text-gray-400">Debt</h5>
          <p className="font-bold">$ {props.cardInfo.debt}</p>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
