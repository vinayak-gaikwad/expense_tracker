import React from 'react'
import './Balance.css'

function Balance({ total, income, expense }) {
    return (
        <div className='balance'>
            <div className='ele'>
                <h3>Balance</h3>
            <h2>&#x20b9; {total}</h2>
            </div>
            <div className='block'>
                <div className='ele inc'>
                    <h3>Income</h3>
                    <h2>&#x20b9; {income}</h2>
                </div>
                <div className='ele exp'>
                    <h3>Expense</h3>
                    <h2>&#x20b9; {expense}</h2>
                </div>

            </div>
            
        </div>
        
    )
}

export default Balance
