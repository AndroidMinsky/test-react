import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export default function Expenses({ data }) {
  return (
    <div className="expenses">
      <ExpenseItem {...data[0]} />
      <ExpenseItem {...data[1]} />
      <ExpenseItem {...data[2]} />
      <ExpenseItem {...data[3]} />
    </div>
  );
}
