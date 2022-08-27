import React, { useState } from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";

export default function Expenses({ data }) {
  const [year, setYear] = useState("2021");

  const yearChangeHandler = function (e) {
    setYear(e.target.value);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter onYearChange={yearChangeHandler} year={year} />
      {data.map((expense) => (
        <ExpenseItem {...expense} key={expense.id} />
      ))}
    </Card>
  );
}
