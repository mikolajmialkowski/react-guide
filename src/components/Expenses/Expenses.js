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

  const FilteredYear = () => {
    return props.expenses.filter(
      (expense) => expense.date.getFullYear().toString() === year.toString()
    );
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={year} onYearPicked={YearPickedHandler} />
        {FilteredYear().length === 0 ? (
          <p>No expensed found</p>
        ) : (
          FilteredYear().map((expense) => (
            <ExpenseIteam
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
      </Card>
    </div>
  );
};

export default Expenses;
