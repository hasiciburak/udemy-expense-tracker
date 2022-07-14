import React, {useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../Card/Card";


const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    //useState() returns two things: update function and the variable

    const clickHandler = () => {
        setTitle(props.title);
        console.log(title);
    }

    const month = props.date.toLocaleDateString("en-US", {month: 'long'});
    const day = props.date.toLocaleDateString("en-US", {day: "2-digit"});
    const year = props.date.getFullYear();
    return (
        <Card className="expense-item">
            <ExpenseDate month={month} day={day} year={year}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
