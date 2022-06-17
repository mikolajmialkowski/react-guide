import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter.js";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpenseList from "./ExpensesList";

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
        <ExpenseList items={FilteredYear()}/>
      </Card>
    </div>
  );
};

export default Expenses;
