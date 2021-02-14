import React from "react";
import "./Transaction.css";

function Transaction({ onSubmit, onAmountChange, onTextChange}) {
  return (
    <div className="trans">
      <h3>Add New Transaction</h3>
      
      <p>Text</p>
      <input onChange={onTextChange} placeholder="Enter the text"></input>
      <p>Amount</p>
      <p>( +  for income & -  for expense )</p>
      <input onChange={onAmountChange} placeholder="Enter the amount"></input>
      <button type='submit' onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default Transaction;
