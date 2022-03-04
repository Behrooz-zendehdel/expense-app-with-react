import { useState } from "react";
import TransActionForm from "./TransActionForm";

const OverViewComponent = ({ income, expense, addTransaction }) => {
    const [isShow, setIsShow] = useState(false)


    return (
        <>
            <div className="topsection">
                <p>  balance : {income - expense}</p>
                <button className={`btn ${isShow && "cancel"}`} onClick={() => setIsShow((prevState) => !prevState)}>
                    {isShow ? "cancel" : "add"}
                </button>
            </div>
            {isShow && <TransActionForm addTransaction={addTransaction} />}
            <div className="resultsection">
                <div className="expenseBox">Expense <span style={{ color: "red" }}>{expense} $</span></div>
                <div className="expenseBox">income<span> {income} $</span></div>

            </div>
        </>
    );
}

export default OverViewComponent;