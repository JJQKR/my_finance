import React from "react";
import { v4 as uuidv4 } from "uuid";

const CostCard = ({
  costs,
  setCosts,
  addCost,
  date,
  setDate,
  item,
  setItem,
  amount,
  setAmount,
  description,
  setDescription,
}) => {
  return costs.map((cost, index) => {
    return (
      <ul key={cost.id}>
        <li>{cost.date}</li>
        <li>{cost.item}</li>
        <li>{cost.amount}</li>
        <li>{cost.description}</li>
      </ul>
    );
  });
};

export default CostCard;
