import React, { useState, useEffect } from "react";
import MonthButton from "./MonthButton";
import { v4 as uuidv4 } from "uuid";

const SubmitCost = () => {
  const [costs, setCosts] = useState([
    {
      id: "25600f72-53b4-4187-a9c2-47358580e2f8",
      date: "2024-01-10",
      item: "부동산",
      amount: 550000000,
      description: "이제 이 집은 제 겁니다",
    },
  ]);
  const [date, setDate] = useState("");
  //이거를 MonthButton과 CostCard까지 쭉 이어줘야 함
  //근데 클릭시, date에서 가져온 month에 맞게 CostCard를 띄우는 식이면
  //맨 처음에 기본으로는 아무것도 안 뜨겠지?
  //============> 맨 처음 selectedMonth를 1, activeIndex를 0으로 설정해서 해결
  //어쨌든 수민이가 알려준 대로 코드 분해&재조립만 하기는 싫으니까
  //24.05.24 밤10:10에 내린 결정인데 나중에 후회하게 될까?
  //스파르타 예시에서는 월을 먼저 선택해야 데이터가 저장되고
  //1월 내역의 날짜를 2월로 수정해도 월이 옮겨지지 않는다
  //이걸 보완한다고 생각하고 setDate로 쭉 이어가는 로직 선택

  const [item, setItem] = useState("");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [addedMonth, setAddedMonth] = useState(1); //@@@@@@@@@@@@@@확인필요@@@@@@@@@@@
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
    setSelectedMonth(index + 1);
  };

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

    handleClick(addedMonth - 1);
  };

  useEffect(() => {
    const storedCosts = JSON.parse(localStorage.getItem("costs")) || [];
    setCosts(storedCosts); //컴포넌트 마운트 시 한 번 실행. LS에서 costs가져와 이걸 초기값으로 지정
  }, []); //의존성 배열 비어있음. 아무도 나를 건드릴 수 없으셈

  useEffect(() => {
    localStorage.setItem("costs", JSON.stringify(costs));
  }, [costs]);

  useEffect(() => {
    if (date) {
      setAddedMonth(Number(date.slice(5, 7)));
    }
  }, [date]);
  console.log(date);
  console.log(addedMonth);
  //콘솔 & 코드 보며 과정 이해하기@@@@@@@@@@@@확인필요@@@@@@@

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
      <MonthButton
        costs={costs}
        date={date}
        setDate={setDate}
        addedMonth={addedMonth}
        setAddedMonth={setAddedMonth}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        handleClick={handleClick}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      ></MonthButton>
    </>
  );
};

export default SubmitCost;
