import React, { useState } from "react";
import styled from "styled-components";

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
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

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
    </div>
  );
};

export default MonthButton;
