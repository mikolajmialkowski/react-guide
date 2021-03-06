import "./App.css";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Car Insurance",
    amount: 69,
    date: new Date(),
  },
  {
    id: 2,
    title: "Boat Insurance",
    amount: 420,
    date: new Date(),
  },
  {
    id: 3,
    title: "Plane Insurance",
    amount: 2137,
    date: new Date(),
  },
  {
    id: 4,
    title: "Rocket Insurance",
    amount: 6969,
    date: new Date(),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expenseData) => {
    setExpenses((previousState) => {
      return [expenseData, ...previousState];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
