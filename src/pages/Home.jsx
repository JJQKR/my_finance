import React, { useState } from "react";
import SubmitCost from "../components/SubmitCost";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [formValues, setFormValues] = useState({
    id: uuidv4(),
    date: "",
    item: "",
    amount: 0,
    description: "",
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // @@@@@@@ 기존 방법과 [name] : value 방법 비교해서 보기 @@@@@@@@

  // (튜터님 코멘트)
  // 고민하신 내용들 다 버리기엔 너무 아까워요.. 어딘가에 branch로 따로 저장해서 나중에 다시 보시면 도움이 될 것 같아요 ! 👍
  return (
    <>
      <SubmitCost
        formValues={formValues}
        setFormValues={setFormValues}
      ></SubmitCost>
    </>
  );
};

export default Home;
