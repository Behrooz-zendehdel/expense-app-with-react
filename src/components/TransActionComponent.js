import { useEffect, useState } from "react";

const TransActionComponent = (props) => {
    const [searchItem, setSearchItem] = useState("")
    const [filteredTnx, setFilteredTnx] = useState(props.transactions)

    const changeHandler = (e) => {
        setSearchItem(e.target.value)
        filterTransactions(e.target.value)
    }
    const filterTransactions = (search) => {
        if (!search || search === "") {
            setFilteredTnx(props.transactions)
            return;
        }
        const filtered = props.transactions.filter((t) => t.desc.toLowerCase().includes(search.toLowerCase()))
        setFilteredTnx(filtered)
    }
    useEffect(() => {
        filterTransactions(searchItem)
    }, [props.transactions])
    if (!props.transactions.length) return <h5>add some inx</h5>
    return (
        <section>
            <input type="text" value={searchItem} className="search" onChange={changeHandler} placeholder="search :" />

            {filteredTnx.length ? filteredTnx.map((t) => (
                <div className="transaction" style={{ borderRight: t.type === "expense" && "3px solid red" }} key={t.id}>

                    <span>{t.desc}</span>
                    <span>{t.amount}</span>

                </div>
            )) : "no item"}
        </section>
    );
}

export default TransActionComponent;