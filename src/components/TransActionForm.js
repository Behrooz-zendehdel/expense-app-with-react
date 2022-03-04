const TransActionForm = () => {
    
    return ( 
        <form>
            <input type="text" name="desc"/>
            <input type="number" name="value"/>
            <div>
                <input type="radio" value="expense" name="type"/>
                <lable>expense</lable>
                <input type="radio" value="income" name="type"/>
                <lable>income</lable>
            </div>

        </form>
     );
}
 
export default TransActionForm;