import React from "react";
import "./History.css";

function History({ id, text, amount, removeHistory, dclass, date }) {
  return (
    
      <li key={id} className={dclass} >
        {text} <span> &#x20b9; {amount}</span> <span>{date}</span> <button title='Delete' className='btn' onClick={removeHistory}>X</button>
      </li>
    
  );  
}

export default History;
