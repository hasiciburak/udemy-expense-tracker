import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    // Way 1 to using useState
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');
    // const [enteredExpense, setEnteredExpense] = useState('');

    //Solution Number 2:
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    })

    const titleChangeHandler = (event) => {
        setUserInput({
            ...userInput, enteredTitle: event.target.value
        })
        ;
    };

    const amountChangeHandler = (event) => {
        setUserInput({
            ...userInput, enteredAmount: event.target.value
        });
    }

    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput, enteredDate: event.target.value
        });
    }

    const expenseChangeHandler = event => {

    }
    return (
        <form action="">
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="Title">Title</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input type="date" min="2019-01-01" step="2022-12-31" onChange={dateChangeHandler}/>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;
