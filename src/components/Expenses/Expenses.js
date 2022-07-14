import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../Card/Card";

const Expenses = (props) => {
    return (
        <Card className="expenses">
            {
                props.expenses.map(expenseOptions => {
                    return <ExpenseItem key={expenseOptions.id} title={expenseOptions.title} date={expenseOptions.date}
                                        amount={expenseOptions.amount}/>;
                })
            }
        </Card>
    );

}

export default Expenses;