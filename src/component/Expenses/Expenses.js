import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const onYearChange = (year) => {
    setFilteredYear(year);
  };

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={onYearChange} />
        <ExpenseChart expenses={filterExpenses}/>
        <ExpenseList expenses={filterExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
