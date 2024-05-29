import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();

  const handleChange = (event) => {
    setCost({
      ...cost,
      [event.target.name]: event.target.value,
    });
  };

  const handleSave = () => {
    const updatedCosts = costs.map((c) => (c.id === id ? cost : c));
    localStorage.setItem("costs", JSON.stringify(updatedCosts));
    navigate("/");
  };

  setCosts(
    (prev) => prev.map((expense) => (expense.id === id ? formData : expense)),
    () => {
      alert("수정되었습니다.");
      navigate("/");
    }
  );

  const handleDelete = () => {
    const updatedCosts = costs.filter((c) => c.id !== id);
    //alert으로 "정말 삭제하시겠습니까?" 띄우기
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
      <form onSubmit={addCost}>
        <label htmlFor="date-input">날짜</label>
        <input
          id="date-input"
          type="text"
          placeholder="YYYY-MM-DD"
          value={costs.date}
          onChange={
            (event) => setCosts({ ...costs, date: event.target.value }) //이 로직은 상세페이지에서 항목 별 수정 시 쓰자
          }
        />
        날짜
        <input
          name="date"
          type="text"
          value={cost.date}
          onChange={handleChange}
        />
        항목
        <input
          name="item"
          type="text"
          value={cost.item}
          onChange={handleChange}
        />
        금액
        <input
          name="amount"
          type="number"
          value={cost.amount}
          onChange={handleChange}
        />
        내용
        <input
          name="description"
          type="text"
          value={decodedDescription}
          onChange={handleChange}
        />
        <button onClick={handleSave}>수정</button>
        <button onClick={handleDelete}>삭제</button>
      </form>
      <button onClick={() => navigate("/")}>뒤로 가기</button>
    </div>
  );
};

export default Detail;
