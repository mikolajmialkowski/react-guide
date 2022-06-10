import "./Expenses.css";
import ExpenseIteam from "./ExpenseItem.js";
import ExpensesFilter from "./ExpensesFilter.js";
import Card from "../UI/Card";
import React, { useState } from "react";

const Expenses = (props) => {
  const [year, setYear] = useState(new Date().getFullYear());

  const YearPickedHandler = (selectedYear) => {
    setYear((previousState) => {
      return selectedYear;
    });
    console.log(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={year} onYearPicked={YearPickedHandler} />
        {props.expenses.map((expense) => (
          <ExpenseIteam
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
