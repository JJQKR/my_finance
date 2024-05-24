import React, { useState, useEffect } from "react";
import MonthButton from "./MonthButton";
import { v4 as uuidv4 } from "uuid";

const SubmitCost = () => {
  const [costs, setCosts] = useState([
    {
      id: "25600f72-53b4-4187-a9c2-47358580e2f8",
      date: "2024-01-10",
      item: "도서",
      amount: 40500,
      description: "모던 자바스크립트",
    },
    {
      id: "25600f72-99b4-41z7-e4h6-47312365e2f8",
      date: "2024-02-02",
      item: "간식",
      amount: 500,
      description: "아이스크림",
    },
  ]);
  const [date, setDate] = useState("");
  //이거를 MonthButton과 CostCard까지 쭉 이어줘야 함
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const addCost = (event) => {
    event.preventDefault();
    const newCost = {
      id: uuidv4(),
      date,
      item,
      amount,
      description,
    };
    setCosts((prevCosts) => [...prevCosts, newCost]);
    setDate("");
    setItem("");
    setAmount("");
    setDescription("");
    //초기화에서도 함수형 업데이트를 사용해야 할까?
  };

  useEffect(() => {
    const storedCosts = JSON.parse(localStorage.getItem("costs")) || [];
    setCosts(storedCosts); //컴포넌트 마운트 시 한 번 실행. LS에서 costs가져와 이걸 초기값으로 지정
  }, []); //의존성 배열 비어있음. 아무도 나를 건드릴 수 없으셈

  useEffect(() => {
    localStorage.setItem("costs", JSON.stringify(costs));
  }, [costs]);

  return (
    <>
      <form onSubmit={addCost}>
        <div>
          <label htmlFor="date-input">날짜</label>
          <input
            id="date-input"
            type="text"
            placeholder="YYYY-MM-DD"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />

          <label htmlFor="item-input">항목</label>
          <input
            id="item-input"
            type="text"
            placeholder="지출 항목"
            value={item}
            onChange={(event) => setItem(event.target.value)}
          />

          <label htmlFor="amount-input">금액</label>
          <input
            id="amount-input"
            type="number"
            placeholder="지출 금액"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />

          <label htmlFor="description-input">내용</label>
          <input
            id="description-input"
            type="text"
            placeholder="지출 내용"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <button type="submit">저장</button>
        {/* 저장 버튼 누를 때 유효성 검사 필요 */}
      </form>
      <MonthButton costs={costs}></MonthButton>
    </>
  );
};

export default SubmitCost;
