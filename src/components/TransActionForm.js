import { useState } from "react";

const TransActionForm = ({ addTransaction, setIsShow }) => {
    const [formValues, setFormValues] = useState({
        type: "expense",
        amount: 0,
        desc: "",
    });
    const changeHandler = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    };
    const submitHandler = (e) => {
        e.preventDefault();
        addTransaction(formValues)
        setIsShow(false)

    }
    return (
        <form onSubmit={submitHandler}>
            <input type="text" name="desc" onChange={changeHandler} value={formValues.desc} placeholder="description" />
            <input type="number" name="amount" onChange={changeHandler} value={formValues.amount} placeholder="amount" />
            <div className="radioBox">
                <input type="radio" value="expense" id="expense" name="type" onChange={changeHandler} checked={formValues.type === "expense"} />
                <label htmlFor="expense">expense</label>
                <input type="radio" id="income" value="income" name="type" onChange={changeHandler} checked={formValues.type === "income"} />
                <label htmlFor="income">income</label>
            </div>
            <button className="btn primary" type="submit">add transaction</button>

        </form>
    );
}

export default TransActionForm;