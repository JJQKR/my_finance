import React from "react";

const CostCard = ({ costs, selectedMonth }) => {
  return (
    <>
      {costs
        .filter((cost) => selectedMonth === Number(cost.date.slice(5, 7)))
        .map((cost) => {
          return (
            <ul key={cost.id}>
              <li>{cost.date}</li>
              <li>{cost.item}</li>
              <li>{cost.amount}</li>
              <li>{cost.description}</li>
            </ul>
          );
        })}
    </>
  );
};

export default CostCard;
