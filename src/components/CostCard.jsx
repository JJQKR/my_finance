import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./AppContextProvider";

const StDiv = styled.div`
  border: black solid 1px;
  background-color: red;
`;
const CostCard = () => {
  const { costs = [], selectedMonth } = useContext(AppContext);
  const navigate = useNavigate();

  const clickForDetail = (cost) => {
    const { id, date, item, amount, description } = cost;
    if (id && date && item && amount && description) {
      navigate("/detail/:id");
    } else {
      console.log("Missing cost data");
    }
    console.log(costs);
  };

  return (
    <StDiv className="cardContainer" onClick={clickForDetail}>
      {costs
        .filter(
          (cost) => cost && selectedMonth === Number(cost.date.slice(5, 7))
        )
        .map((cost) => {
          return (
            <ul key={cost.id} onClick={() => clickForDetail(cost)}>
              <li>날짜 - {cost.date}</li>
              <li>항목 - {cost.item}</li>
              <li>금액 - {cost.amount}</li>
              <li>내용 - {cost.description}</li>
            </ul>
          );
        })}
    </StDiv>
  );
};

export default CostCard;
