import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

const NewExpense = (props) => {

  const[showFormToAddExpense, setShowFormToAddExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
  };

  const showFormToAddNewExpenseHandler = () => {
    setShowFormToAddExpense(true);
  };

  const hideFormToAddNewExpenseHandler = () => {
    setShowFormToAddExpense(false);
  };
  
  
  if(showFormToAddExpense){
    return (
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onHideForm={hideFormToAddNewExpenseHandler}/>
      </div>
    );
  }

  return(
      <div className="new-expense">
          <button onClick={showFormToAddNewExpenseHandler}>Add new expense</button>
      </div>
  );

};

export default NewExpense;
