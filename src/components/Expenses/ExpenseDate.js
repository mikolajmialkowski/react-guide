import Card from '../UI/Card.js';
import './ExpenseDate.css';

function ExpenseDate(props) {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();

  return (
    <Card className='expense-date'>
      <div className='expense-day'>{day}</div>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
    </Card>
  );
}

export default ExpenseDate;
