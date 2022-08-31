import React, { useState } from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import Chart from "./Chart";

export default function Expenses({ data }) {
  const [year, setYear] = useState("2021");

  const yearChangeHandler = function (e) {
    setYear(e.target.value);
  };

  const filteredData = data.filter(
    (expense) => String(expense.date.getFullYear()) === year
  );

  let expensesContent = (
    <p style={{ color: "white", textAlign: "center" }}>No expenses found 🤷‍♂️</p>
  );

  if (filteredData.length > 0) {
    expensesContent = filteredData.map((expense) => (
      <ExpenseItem {...expense} key={expense.id} />
    ));
  }

  return (
    <Card className="expenses">
      <ExpenseFilter onYearChange={yearChangeHandler} year={year} />
      <Chart expenses={filteredData} />
      {expensesContent}
    </Card>
  );
}
