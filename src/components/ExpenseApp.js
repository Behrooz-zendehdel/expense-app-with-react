import { useState } from "react";
import TransActionComponent from './TransActionComponent'
const Expensetracker = () => {
    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);
    const [transactions,setTransactions]=useState([]);


    return (
        <section className="container" >
            <div className="topsection">
                <p>  balance : {income - expense}</p>
            <button>add</button>
            </div>
            <div className="resultsection">
                <div>
                    Expense {expense}
                </div>
                <div>
                    income {income}
                </div>
            </div>
            <TransActionComponent transactions={transactions}/>
        </section>
    );
}

export default Expensetracker;