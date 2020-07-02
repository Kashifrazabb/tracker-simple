import React from 'react';
const IncomeExpenseTotal = ({income,expense}) => {
    return (
        <div id='incomeexpensetotal'>
            <div total='incometotal'>
                <h3>Income</h3>
                <p id='text-center'>{income} $</p>
            </div>
            <div total='expensetotal'>
                <h3>Expense</h3>
                <p id='text-center'>{expense} $</p>
            </div>
        </div>
        
    )
}

export default IncomeExpenseTotal;
