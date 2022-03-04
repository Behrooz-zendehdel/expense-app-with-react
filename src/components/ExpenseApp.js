import { useState } from "react";
import TransActionComponent from './TransActionComponent'
import OverViewComponent from "./OverViewComponent";
const Expensetracker = () => {
    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);
    const [transactions, setTransactions] = useState([]);


    return (
        <section className="container" >
            <OverViewComponent expense={expense} income={income} />
            <TransActionComponent transactions={transactions} />
        </section>
    );
}

export default Expensetracker;