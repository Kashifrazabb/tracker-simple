import React from 'react'

const Form = ({charge,amount,handleCharge,handleAmount,handleSubmit,btnText}) => {
    return (
        <>
        <h3 id='form-title'>Add a Transaction</h3>
        <hr/><br/>
        <form onSubmit={handleSubmit}>        
            <div id='description'>
                <label htmlFor='description'>Detail</label><br/>
                <input type='text' placeholder='Description of being-added thing' onChange={handleCharge}
                value={charge}/>
            </div>
            <div id='amount'>
                <label>Amount</label><br/>
                <input type='number' placeholder='Amount' onChange={handleAmount}
                value={amount}/>
            </div>
            <div id='btn'>
                <button type='submit'>{btnText?'Edit':'Add'}</button>
            </div>
        </form>
        </>
    )
}

export default Form;
