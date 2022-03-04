const TransActionComponent = ({ transactions }) => {
    return (
        <section>
            {transactions.length && transactions.map((t) => <div className="transaction" style={{borderRight:t.type === "expense" && "3px solid red"}} key={t.id}>

                <span>{t.desc}</span>
                <span>{t.amount}</span>

            </div>)}
        </section>
    );
}

export default TransActionComponent;