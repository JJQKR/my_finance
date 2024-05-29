import React, { useState } from "react";
import SubmitCost from "../components/SubmitCost";
import MonthButton from "../components/MonthButton";
import CostCard from "../components/CostCard";

const Home = () => {
  return (
    <>
      <SubmitCost />
      <MonthButton />
      <CostCard />
    </>
  );
};

export default Home;
