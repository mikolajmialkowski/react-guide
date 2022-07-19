import Chart from "../Chart/Chart.js";

const ExpenseChart = (props) => {
  const chartDataPoints = [
    {
      label: "Jan",
      value: 0,
      number: 0,
    },
    {
      label: "Feb",
      value: 0,
      number: 1,
    },
    {
      label: "Mar",
      value: 0,
      number: 3,
    },
    {
      label: "Apr",
      value: 0,
      number: 3,
    },
    {
      label: "May",
      value: 0,
      number: 4,
    },
    {
      label: "Jun",
      value: 0,
      number: 5,
    },
    {
      label: "Jul",
      value: 0,
      number: 6,
    },
    {
      label: "Aug",
      value: 0,
      number: 7,
    },
    {
      label: "Sep",
      value: 0,
      number: 8,
    },
    {
      label: "Oct",
      value: 0,
      number: 9,
    },
    {
      label: "Nov",
      value: 0,
      number: 10,
    },
    {
      label: "Dec",
      value: 0,
      number: 11,
    },
  ];
 
  //sum all expenses for specific month

  chartDataPoints.forEach(
    (month) =>
      (month.value = props.expenses
        .filter((expense) => expense.date.getMonth() === month.number)
        .map((e) => Number(e.amount))
        .reduce((a, b) => a + b, 0))
  );

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;
