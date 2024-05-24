import React from "react";
import { v4 as uuidv4 } from "uuid";

// 05.24 오후 복붙
//리액트(내부적으로)에서 맵을 돌려서 자식을 여러개 찍어낼 떄
//각각 자식을 식별하기 위한 key
//실제로 props로 받아서 사용하지는 않음
//
//-----------costs를 하나씩 돌면서 화면에 렌더링할 때 리액트 내부 식별을 위해 필요한 key props
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
  return (
    <>
      {costs.map((cost, index) => {
        <ul>
          <li>{cost.date}</li>
          <li>{cost.item}</li>
          <li>{cost.amount}</li>
          <li>{cost.description}</li>
        </ul>;
      })}
    </>
  );
};

export default CostCard;
