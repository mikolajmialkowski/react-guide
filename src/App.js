import "./App.css";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
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
      <NewExpense/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
