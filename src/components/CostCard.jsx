import React from "react";

const CostCard = ({ costs }) => {
  return costs.map((cost) => {
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
