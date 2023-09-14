import ExpenseItem from "./ExpenseItem";
import './ExpensesCollection.css'
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";

export default function ExpensesCollection(props) {
    const [filteredYear, setFilteredYear] = useState('All');
    let filteredData
    const handleFilter = (year) => {
        setFilteredYear(year);
    }

    if (filteredYear === 'All') {
        filteredData = props.items
    }else {
        filteredData = props.items.filter(item => item.date.getFullYear().toString() === filteredYear)
    }

    return(
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onAddFilter={handleFilter}/>

            {filteredData.map(expense =>
                <ExpenseItem key={expense.id} date={expense.date} title={expense.title} amount={expense.amount} />
            )};

        </Card>
    );
}