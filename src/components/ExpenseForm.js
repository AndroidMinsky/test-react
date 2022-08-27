import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm({ addExpense }) {
  // const [title, setTitle] = useState("");
  // const [amount, setAmount] = useState("");
  // const [date, setDate] = useState("");

  const [input, setInput] = useState({ title: "", amount: "", date: "" });

  const titleChangeHandler = function (e) {
    // setTitle(e.target.value);
    setInput((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };

  const amountChangeHandler = function (e) {
    // setAmount(e.target.value);
    setInput((prevState) => {
      return { ...prevState, amount: e.target.value };
    });
  };

  const dateChangeHandler = function (e) {
    // setDate(e.target.value);
    setInput((prevState) => {
      return { ...prevState, date: e.target.value };
    });
  };

  const submitHandler = function (e) {
    e.preventDefault();
    const data = {
      title: input.title,
      amount: input.amount,
      date: new Date(input.date),
    };

    addExpense(data);

    setInput({ title: "", amount: "", date: "" });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={input.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={input.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={input.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
