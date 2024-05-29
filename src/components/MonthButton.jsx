import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import CostCard from "./CostCard";
import AppContext from "./AppContextProvider";

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

const MonthButton = () => {
  const { selectedMonth, setSelectedMonth, activeIndex } =
    useContext(AppContext);

  // 받아오는 값이 undefined인데 해결을 못 하고 있다
  // const appContext = useContext(AppContext);
  // const { selectedMonth, setSelectedMonth, activeIndex } = appContext || {};

  useEffect(() => {
    const storedMonth = JSON.parse(localStorage.getItem("selectedMonth")) || 1;
    setSelectedMonth(storedMonth);
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedMonth", JSON.stringify(selectedMonth));
  }, [selectedMonth]);

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

      <CostCard></CostCard>
    </div>
  );
};

export default MonthButton;
