import "./Expenses.css";
import ExpenseIteam from "./ExpenseItem.js";
import ExpensesFilter from "./ExpensesFilter.js";
import Card from "../UI/Card";
import React, { useState } from "react";

const Expenses = (props) => {
  const [year, setYear] = useState(new Date().getFullYear());

  const YearPickedHandler = (selectedYear) => {
    setYear((previousState) => {
      return(selectedYear);
    });
    console.log(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter selectedYear={year} onYearPicked={YearPickedHandler} />
        <ExpenseIteam
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseIteam
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseIteam
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseIteam
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
