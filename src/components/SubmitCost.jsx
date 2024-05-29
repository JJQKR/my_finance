import React, { useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "./AppContextProvider";

const SubmitCost = () => {
  const { costs, setCosts } = useContext(AppContext);
  const handleClick = (index) => {
    setActiveIndex(index);
    setSelectedMonth(index + 1);
  };

  const addCost = (event) => {
    event.preventDefault();
    //유효성 검사 넣기
    const newCost = {
      id: uuidv4(),
      date,
      item,
      amount,
      description,
    };
    setCosts((prevCosts) => [...prevCosts, newCost]);

    //초기화 넣기

    handleClick(addedMonth - 1);
  };

  useEffect(() => {
    const storedCosts = JSON.parse(localStorage.getItem("costs")) || [];
    setCosts(storedCosts);
  }, []);

  useEffect(() => {
    localStorage.setItem("costs", JSON.stringify(costs));
  }, [costs]);

  useEffect(() => {
    if (costs.date) {
      setAddedMonth(Number(costs.date.slice(5, 7)));
    }
  }, [costs.date]);

  return (
    <form onSubmit={addCost}>
      <div>
        <label htmlFor="date-input">날짜</label>
        <input
          id="date-input"
          type="text"
          placeholder="YYYY-MM-DD"
          value={costs.date}
          onChange={(event) => setDate(event.target.value)}
        />

        <label htmlFor="item-input">항목</label>
        <input
          id="item-input"
          type="text"
          placeholder="지출 항목"
          value={costs.item}
          onChange={(event) => setItem(event.target.value)}
        />

        <label htmlFor="amount-input">금액</label>
        <input
          id="amount-input"
          type="number"
          placeholder="지출 금액"
          value={costs.amount}
          onChange={(event) => setAmount(event.target.value)}
        />

        <label htmlFor="description-input">내용</label>
        <input
          id="description-input"
          type="text"
          placeholder="지출 내용"
          value={costs.description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <button type="submit">저장</button>
    </form>
  );
};

export default SubmitCost;
