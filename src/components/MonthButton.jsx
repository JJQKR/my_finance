import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CostCard from "./CostCard";

const StButton = styled.button`
  background-color: ${(props) => (props.$active ? "#b44bf1" : "#c8c5c5")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;

  &:hover {
    background-color: #b44bf1;
  }
`;

const monthArray = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
];

const MonthButton = ({
  costs,
  handleClick,
  selectedMonth,
  setSelectedMonth,
  activeIndex,
  setActveIndex,
}) => {
  // activeIndex와 selectedMonth의 인덱스를 하나로 통합(?)해서 사용하고 싶다
  // ${(props) => (props.$active ? "#b44bf1" : "#c8c5c5")}
  // active props를 이렇게 사용했듯이 아래 StButton 내에서 selectedMonth를 쓰고 싶다

  // ===========> 핸들클릭에 setSelectedMonth(index + 1)로 구현

  useEffect(() => {
    const storedMonth = JSON.parse(localStorage.getItem("selectedMonth")) || [];
    setSelectedMonth(storedMonth);
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedMonth", JSON.stringify(selectedMonth));
  }, [selectedMonth]);

  console.log(selectedMonth);
  console.log(activeIndex);

  return (
    <div>
      {monthArray.map((monthText, index) => (
        <StButton
          key={index}
          $active={activeIndex === index}
          onClick={() => handleClick(index)}
        >
          {monthText}
        </StButton>
      ))}

      <CostCard costs={costs} selectedMonth={selectedMonth}></CostCard>
    </div>
  );
};

export default MonthButton;
