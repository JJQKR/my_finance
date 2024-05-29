import React, { useState, createContext, useEffect } from "react";

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const [costs, setCosts] = useState([]);

  // const [costs, setCosts] = useState(() =>
  //   localStorage.getItem("costs")
  //     ? JSON.parse(localStorage.getItem("costs"))
  //     : []
  // );
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");

  const [addedMonth, setAddedMonth] = useState(1);
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);

  const contextValue = {
    costs,
    setCosts,
    date,
    setDate,
    item,
    setItem,
    amount,
    setAmount,
    description,
    setDescription,
    addedMonth,
    setAddedMonth,
    selectedMonth,
    setSelectedMonth,
    activeIndex,
    setActiveIndex,
  };

  // useEffect(() => {
  //   localStorage.setItem("text", JSON.stringify(costs));
  // }, [costs]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
