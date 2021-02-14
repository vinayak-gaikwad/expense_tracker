import React from "react";
import History from "./History";
import './HistoryList.css'

function HistoryList({ transaction, removeHistory, date }) {
  return (
    <div className='historylist'>
      <h3>History</h3>
      {
      transaction.map((data) => {
        if(data.amount>0){
            var dclass = 'plus'
        }
        else{
            dclass = 'minus'
        }
        return <History date= {date} dclass={dclass}  removeHistory={() => removeHistory(data.id)} id={data.id} text={data.text} amount={data.amount} />;
      })}
    </div>
  );
}

export default HistoryList;
