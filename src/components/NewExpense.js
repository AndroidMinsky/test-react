import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense({ addExpense }) {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="new-expense">
      {!showForm && (
        <button onClick={() => setShowForm(true)}>Add New Expense</button>
      )}
      {showForm && (
        <ExpenseForm addExpense={addExpense} setShowForm={setShowForm} />
      )}
    </div>
  );
}
