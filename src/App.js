import logo from "./logo.svg";
import "./App.css";
import ExpenseIteam from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 69,
      date: new Date(),
    },
    {
      title: "Boat Insurance",
      amount: 420,
      date: new Date(),
    },
    {
      title: "Plane Insurance",
      amount: 2137,
      date: new Date(),
    },
    {
      title: "Rocket Insurance",
      amount: 6969,
      date: new Date(),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseIteam
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseIteam>
      <ExpenseIteam
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseIteam>
      <ExpenseIteam
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseIteam>
      <ExpenseIteam
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseIteam>
    </div>
  );
}

export default App;
