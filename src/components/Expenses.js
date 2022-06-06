import "./Expenses.css"
import ExpenseIteam from "./ExpenseItem.js";

function Expenses(props) {
  return (
    <div className="expenses">
      <h2>Let's get started!</h2>
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
    </div>
  );
}

export default Expenses;
