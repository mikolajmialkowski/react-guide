const ExpenseAdd = (props) => {

    const addHandler = (event) => {
        event.preventDefault(); // prevet default page reload by browser
        props.showFormToAddExpense(true);
      };

    return (
        <div>
            <button onClick={addHandler}>Add new expense</button>
        </div>
    );
}

export default ExpenseAdd;