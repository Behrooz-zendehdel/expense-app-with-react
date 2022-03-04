import { useState } from "react";
import TransActionForm from "./TransActionForm";

const OverViewComponent = ({ income, expense }) => {
    const [isShow, setIsShow] = useState(false)


    return (
        <>
            <div className="topsection">
                <p>  balance : {income - expense}</p>
                <button onClick={() => setIsShow((prevState) => !prevState)}>
                    {isShow ? "cancel" : "add"}
                </button>
            </div>
            {isShow && <TransActionForm />}
            <div className="resultsection">
                <div>Expense {expense}</div>
                <div>income {income}</div>

            </div>
        </>
    );
}

export default OverViewComponent;