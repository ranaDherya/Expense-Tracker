import React, {useState} from 'react';

import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart';

import './Expenses.css';



const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const onFilterChange = (year) => {
    setFilteredYear(year);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <Card className="expenses">

      
      <ExpensesFilter selected={filteredYear} onSelectHandler={onFilterChange}/>

      <ExpensesChart expenses={filteredExpenses}/>

      <ExpensesList items={filteredExpenses}/>
      
    </Card>
  );
}

export default Expenses;