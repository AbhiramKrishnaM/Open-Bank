import React from "react";
import AddCard from "../common/button/AddCard";
import RightArrow from "../common/button/RightArrow";
import PaymentCard from "./card/PaymentCard";

export default function Cards() {
  const cards = [
    {
      expiryDate: "04/2030",
      companyIcon: "bx:bxl-visa",
      cardNumber: "1234",
      bgColor: "#E1E7E9",
    },
    {
      expiryDate: "01/2022",
      companyIcon: "bx:bxl-mastercard",
      cardNumber: "1234",
      bgColor: "bg-black",
    },
  ];
  return (
    <div>
      <div className="flex">
        <PaymentCard cards={cards[0]} />
        <RightArrow />
      </div>
      <AddCard />
    </div>
  );
}
