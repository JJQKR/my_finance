import React, { useState, useEffect } from "react";
import MonthButton from "./MonthButton";
import { v4 as uuidv4 } from "uuid";

const SubmitCost = ({ formValues, setFormValues }) => {
  const [costs, setCosts] = useState([
    {
      id: "25600f72-53b4-4187-a9c2-47358580e2f8",
      date: "2024-01-10",
      item: "부동산",
      amount: 550000000,
      description: "이제 이 집은 제 겁니다",
    },
  ]);

  const [addedMonth, setAddedMonth] = useState(1); //@@@@@@@@@@@@@@확인필요@@@@@@@@@@@
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
    setSelectedMonth(index + 1);
  };

  const addCost = (event) => {
    event.preventDefault();
    const { date, item, amount, description } = formValues;
    const newCost = {
      id: uuidv4(),
      date,
      item,
      amount,
      description,
    };
    setCosts((prevCosts) => [...prevCosts, newCost]);
    setFormValues({
      date: "",
      item: "",
      amount: 0,
      description: "",
    });
    //초기화에서도 함수형 업데이트를 사용해야 할까?

    handleClick(addedMonth - 1);
  };

  useEffect(() => {
    const storedCosts = JSON.parse(localStorage.getItem("costs")) || [];
    console.log("useEffect 의존성배열[] 1=>", storedCosts);
    setCosts(storedCosts); //컴포넌트 마운트 시 한 번 실행. LS에서 costs가져와 이걸 초기값으로 지정
  }, []); //의존성 배열 비어있음. 아무도 나를 건드릴 수 없으셈

  useEffect(() => {
    console.log("useEffect costs변경 감지 2=> ", costs);
    localStorage.setItem("costs", JSON.stringify(costs));
  }, [costs]);

  useEffect(() => {
    if (formValues.date) {
      setAddedMonth(Number(formValues.date.slice(5, 7)));
    }
  }, [formValues.date]);
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
            value={formValues.date}
            onChange={(event) =>
              setFormValues({ ...formValues, date: event.target.value })
            }
          />

          <label htmlFor="item-input">항목</label>
          <input
            id="item-input"
            type="text"
            placeholder="지출 항목"
            value={formValues.item}
            onChange={(event) =>
              setFormValues({ ...formValues, item: event.target.value })
            }
          />

          <label htmlFor="amount-input">금액</label>
          <input
            id="amount-input"
            type="number"
            placeholder="지출 금액"
            value={formValues.amount}
            onChange={(event) =>
              setFormValues({ ...formValues, amount: event.target.value })
            }
          />

          <label htmlFor="description-input">내용</label>
          <input
            id="description-input"
            type="text"
            placeholder="지출 내용"
            value={formValues.description}
            onChange={(event) =>
              setFormValues({ ...formValues, description: event.target.value })
            }
          />
        </div>
        <button type="submit">저장</button>
        {/* 저장 버튼 누를 때 유효성 검사 필요 */}
      </form>
      <MonthButton
        costs={costs}
        setCosts={setCosts}
        handleClick={handleClick}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        activeIndex={activeIndex}
      ></MonthButton>
    </>
  );
};

// formValues 상태와 setFormValues 함수를 선언하고, 초기값을 빈 문자열과 0으로 설정합니다.
// addCost 함수에서 formValues의 값을 구조 분해 할당하여 새로운 비용 객체를 생성하고,
// costs 상태에 추가합니다. 그리고 formValues 상태를 초기값으로 리셋합니다.
// 입력 필드의 value 속성에 formValues의 해당 값을 할당하고,
// onChange 이벤트 핸들러에서 setFormValues를 호출하여 입력 값을 업데이트합니다.
// MonthButton 컴포넌트에 formValues.date를 전달하고,
// setDate 대신 setFormValues를 전달합니다.
// useEffect에서 formValues.date의 변경을 감지하여 addedMonth 상태를 업데이트합니다.

// ======> 이렇게 하면 formValues 상태를 통해 입력 필드의 값을 관리할 수 있으며,
// ======> 페이지를 이동해도 입력한 값이 초기화되지 않고 유지됩니다.
// ======> 또한 costs 상태와 localStorage에도 입력한 비용 내역이 저장되어 새로고침해도 데이터가 유지

// formValues 객체에는 date, item, amount, description 필드가 있으며,
// 각 입력 필드의 값은 해당 필드에 저장됩니다.

// 입력 필드의 value 속성에 formValues의 해당 값을 바인딩하고,
// onChange 이벤트 핸들러에서 setFormValues 함수를 호출하여 상태를 업데이트합니다. 이때 불변성을 지키기 위해 spread 연산자(...)를 사용하여 기존 formValues를 복사한 후, 변경된 값만 업데이트합니다.

// addCost 함수에서는 formValues 객체를 구조 분해 할당하여 새로운 비용 객체를 생성하고,
// costs 상태에 추가합니다. 그리고 나서 formValues 상태를 초기 상태로 리셋합니다.

// MonthButton 컴포넌트에는 formValues.date를 전달하고,
// setDate 대신 setFormValues를 전달합니다.
// 이렇게 하면 MonthButton 컴포넌트에서도 formValues 상태를 사용할 수 있습니다.

// useEffect 훅에서는 formValues.date의 변경을 감지하여 addedMonth 상태를 업데이트합니다.
// 이렇게 하면 날짜 입력 값에 따라 자동으로 addedMonth 상태가 변경됩니다.

// 이렇게 formValues 상태를 활용함으로써, 입력 폼의 값이 페이지 이동 시에도 초기화되지 않고 유지됩니다.
// 또한 costs 상태와 localStorage에도 입력한 비용 내역이 저장되어 새로고침해도 데이터가 유지됩니다.

// 이 방식은 전역 상태 관리 라이브러리(예: Redux, Context API)를 사용하지 않고도
// 간단한 애플리케이션에서 상태 관리를 효율적으로 할 수 있게 해줍니다.

export default SubmitCost;
