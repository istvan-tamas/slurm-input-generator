import './ExpenseForm.css';
import React, { useState } from 'react';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');

    const titleChangeHandler = (event) => {
           setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) =>{

    };

    const dateChangeHandler = (event) =>{
        
    }

    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />             
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>          
                </div>   
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2023-01-01" max="2023-12-31" onChange={dateChangeHandler}/>             
                </div>   
            </div>
            <div className="new_expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;