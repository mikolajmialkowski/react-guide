import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";
import ExpenseAdd from "./ExpenseAdd.js";

const NewExpense = (props) => {

  const[showFormToAddExpense, setShowFormToAddExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
  };

  const showFormToAddNewExpense = (showFormToAddExpense) => {
    setShowFormToAddExpense(showFormToAddExpense);
  };
  
  if(showFormToAddExpense){
    return (
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      </div>
    );
  }

  return(
    <div className="new-expense">
        <ExpenseAdd showFormToAddExpense={showFormToAddNewExpense} />
    </div>
  );

};

export default NewExpense;
