import React from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export default function Expenses({ data }) {
  return (
    <Card className="expenses">
      {data.map((expense) => (
        <ExpenseItem {...expense} key={expense.id} />
      ))}
    </Card>
  );
}
