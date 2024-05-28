import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const { costs } = location.state || {};
  //CostCard컴포넌트에서 전달해준 state를 받아옴

  const {
    id = "",
    date = "",
    item = "",
    amount = "",
    description = "",
  } = useParams();
  // 가져오는 값이 undefined일 경우 초기값인 ""이 할당돼 오류 방지
  // 각 값에 대해 기본값을 빈 문자열로 설정,
  // 객체 구조 분해 할당(Object Destructuring Assignment)
  // useParams는 객체를 반환하기 때문에 객체 구조 분해 할당 사용 가능
  // const { 변수명1 = 기본값1, 변수명2 = 기본값2, ... } = 객체;
  // 근데 이럴 거면 인코딩 디코딩 왜 해야 하지?

  const decodedDescription = decodeURIComponent(description);
  const [cost, setCost] = useState({
    id,
    date,
    item,
    amount: amount ? Number(amount) : 0,
    description: decodedDescription,
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setCost({
      ...cost,
      [event.target.name]: event.target.value,
    });
    console.log(cost);
  };

  const handleSave = () => {
    const updatedCosts = costs.map((c) => (c.id === id ? cost : c));
    console.log("Detail페이지 update Data =>", updatedCosts);
    localStorage.setItem("costs", JSON.stringify(updatedCosts));
    console.log("수정시 로컬스토리지 data =>", localStorage.getItem("costs"));
    navigate("/");
  };

  const handleDelete = () => {
    const updatedCosts = costs.filter((c) => c.id !== id);
    localStorage.setItem("costs", JSON.stringify(updatedCosts));
    navigate("/");
  };

  useEffect(() => {
    const storedCost = localStorage.getItem(`cost-${id}`);
    if (storedCost) {
      setCost(JSON.parse(storedCost));
    }
  }, [id]);

  return (
    <div>
      날짜<br></br>
      <input
        name="date"
        type="text"
        value={cost.date}
        onChange={handleChange}
      />
      <br></br>
      항목<br></br>
      <input
        name="item"
        type="text"
        value={cost.item}
        onChange={handleChange}
      />
      <br></br>
      금액<br></br>
      <input
        name="amount"
        type="number"
        value={cost.amount}
        onChange={handleChange}
      />
      <br></br>
      내용<br></br>
      <input
        name="description"
        type="text"
        value={decodedDescription}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <button onClick={handleSave}>수정</button>
      <button onClick={handleDelete}>삭제</button>
      <button onClick={() => navigate("/")}>뒤로 가기</button>
    </div>
  );
};

export default Detail;
