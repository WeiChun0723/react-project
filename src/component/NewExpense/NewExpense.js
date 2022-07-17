import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

const NewExpense = (props) => {
const [isEditing, setEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseDate) => {
    const expenseData = {
      ...enteredExpenseDate,
      id: Math.random().toString()
    };
    console.log(expenseData)
    props.onAddExpense(expenseData)
  };

  const startEditingHandler = () => {
    setEditing(true)
  }

  const stopEditingHandler = () => {
    setEditing(false)
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}></ExpenseForm>}
  
    </div>
  );
};

export default NewExpense;
