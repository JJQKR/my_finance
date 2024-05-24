import React from "react";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const data = [
    { id: 1, amount: 3000 },
    { id: 2, amount: 5000 },
  ];

  const params = useParams();

  const targetCost = data.find((cost) => cost.id === Number(params.id));

  return (
    <>
      <h2>현재 페이지는 {targetCost.amount}입니다.</h2>
      <div>Detail</div>
      {data.map((cost) => {
        return (
          <div key={cost.id}>
            <div>지출 내역 : {cost.id} </div>

            <Link to={`/detail/${cost.id}`}>
              <span>Click to See : {cost.amount}</span>
            </Link>
          </div>
        );
      })}
      {data.forEach((cost) => console.log(cost.id))}
    </>
  );
};

export default Detail;
