import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StDiv = styled.div`
  border: black solid 1px;
  background-color: red;
`;
const CostCard = ({ costs, selectedMonth }) => {
  const navigate = useNavigate();

  const clickForDetail = (cost) => {
    const { id, date, item, amount, description } = cost;
    if (id && date && item && amount && description) {
      const encodedDescription = encodeURIComponent(description);
      navigate(
        `/detail/${id}/${date}/${item}/${amount}/${encodedDescription}`,
        { state: { costs } }
      ); //return부에 Detail컴포넌트를 사용하지 않는데
      //조상으로부터 쭉 이어서
      //costs, setCosts 상태를 전달하는 방법
    } else {
      console.log("Missing cost data");
    }
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
