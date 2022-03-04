import { useState } from "react";

const TransActionForm = ({ addTransaction }) => {
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
    }
    return (
        <form onSubmit={submitHandler}>
            <input type="text" name="desc" onChange={changeHandler} value={formValues.desc} />
            <input type="number" name="amount" onChange={changeHandler} value={formValues.amount} />
            <div>
                <input type="radio" value="expense" name="type" onChange={changeHandler} checked={formValues.type === "expense"} />
                <lable>expense</lable>
                <input type="radio" value="income" name="type" onChange={changeHandler} checked={formValues.type === "income"} />
                <lable>income</lable>
            </div>
            <button type="submit">add transaction</button>

        </form>
    );
}

export default TransActionForm;