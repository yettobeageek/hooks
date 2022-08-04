import React from 'react'
import { useState,useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


const AddTransaction = () => {
    const [text,setText]=useState('');
    const [amount,setAmount]=useState(0);
    const {addTransaction}=useContext(GlobalContext)

    const onSubmit=e=>{
        e.preventDefault();

        const newTransaction={
            id:Math.floor(Math.random()*100000000),
            text,
            amount:+amount
        }

        addTransaction(newTransaction);
        setText('');
        setAmount('');
    }

  return (
    <>
    <h3>Add new Transaction</h3>
    <form onSubmit={onSubmit}>
        <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='Add your new transaction..' />
        </div>
        <div className="form-control">
            <label htmlFor="amount"><strong>Amount</strong> <br /><small>[income in(+) expense in(-)]</small></label>
            <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder='Enter amount'/>
        </div>
        <button className="btn">Add Transaction</button>
    </form>
    </>  )
}

export default AddTransaction