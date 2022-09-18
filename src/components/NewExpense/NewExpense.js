import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense (props) {

    const [addExpenseButtonClicked, setAddExpenseButtonClicked] = useState(false);


    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onSaveExpenseData(expenseData);
    }   

    const showForm = () => {
        setAddExpenseButtonClicked(true);
    }
    const hideForm = () => {
        setAddExpenseButtonClicked(false);
    }

    return (
        <div className='new-expense'>
            {!addExpenseButtonClicked && <button onClick={showForm}>Add Expense</button>}
            {addExpenseButtonClicked && <ExpenseForm showForm={hideForm} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    );

}

export default NewExpense;