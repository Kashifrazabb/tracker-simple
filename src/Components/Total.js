import React from 'react'

const Total = ({income,expense}) => {
    return (
        <div id='total'>
           <h3>Balance:</h3>
           <p>{income - Math.abs(expense)} $</p> 
        </div>
    )
}

export default Total;