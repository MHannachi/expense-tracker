import React, {useState} from "react";
import "./ExpenseForm.css"
const ExpenseForm = (props) => {


    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    // const [userInput, setUserInput] = useState(
    //     {
    //         title:'',
    //         amount:'',
    //         date:'',
    //     }
    // );


    // const titleHandler = (event) => {
    //     setTitle(event.target.value);
    //
    //     // setUserInput(
    //     //     {
    //     //         ...userInput,
    //     //         title: event.target.value
    //     //     }
    //     // );
    //
    //     // this way is safer when it depends on the previous state:
    //     // setUserInput((prevState) => {return {...prevState, title: event.target.value};});
    // }
    // const amountHandler = (event) => {
    //     setAmount(event.target.value);
    //
    //     // setUserInput(
    //     //     {
    //     //         ...userInput,
    //     //         amount: event.target.value
    //     //     }
    //     // );
    // }
    // const dateHandler = (event) => {
    //     setDate(event.target.value);
    //
    //     // setUserInput(
    //     //     {
    //     //         ...userInput,
    //     //         date: event.target.value
    //     //     }
    //     // );
    // }

    function sharedHandler(identifier, value) {
        if(identifier === 'title') {
            setTitle(value);
        }else if(identifier === 'amount') {
            setAmount(value);
        }else {
            setDate(value);
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        };
        props.onSaveData(expenseData);
        setTitle('');
        setDate('');
        setAmount('');
    };


    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(event) => {sharedHandler('title', event.target.value)}}
                    // onChange={titleHandler}
                />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={amount}
                    onChange={(event) => {sharedHandler('amount', event.target.value)}}
                />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input
                    type="date"
                    min="2019-01-01"
                    max={"2026-12-14"}
                    value={date}
                    onChange={(event) => {sharedHandler('date', event.target.value)}}
                />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;