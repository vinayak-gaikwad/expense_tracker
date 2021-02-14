import React from "react";
import "./App.css";
import Balance from "./Balance";
import HistoryList from "./HistoryList";
import Transaction from "./Transaction";



let total, income, expense;

class App extends React.Component {
  constructor() {
    super();
    // setting state for text amount historyitems
    this.state = {
      text: "",
      amount: "",
      historyItem: [],
    };
    
  }
  componentWillMount() {
    localStorage.getItem('history') && this.setState({
      historyItem:JSON.parse(localStorage.getItem('history'))
    })
  }
  
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('history',JSON.stringify(nextState.historyItem))
  }
  
  
  onTextChange = (text) => {
    this.setState({
      text: text.target.value,
    });
  };

  onAmountChange = (amount) => {
    this.setState({
      amount: amount.target.value,
    });
    
  };

  generateID = () => {
    return Math.floor(Math.random() * 1000000)
  }

  // to add new transaction on pressing submit button
  onSubmit = () => {
  
    if (this.state.amount === "" || this.state.text === "") {
      alert("Please enter text and amount");
    } 
    else {
      this.setState({
        historyItem: [
          ...this.state.historyItem,
          { id: this.generateID(), text: this.state.text, amount: this.state.amount },
        ],
      })
      
      
    
    }

    
  };
  // deleting entry in the history by clicking on the X button
  removeHistory = (id) => {
    this.setState({
      historyItem: this.state.historyItem.filter((li) => li.id !== id),
    });
  };
  //calculation of balance, income, expense

  calculate = () => {
    const amounts = this.state.historyItem.map((value) => value.amount);

    total = amounts.reduce((acc, am) => (acc += parseInt(am)), 0);

    income = amounts
      .filter((item) => item > 0)
      .reduce((acc, item) => (acc += parseInt(item)), 0);

    expense =
      amounts
        .filter((item) => item < 0)
        .reduce((acc, item) => (acc += parseInt(item)), 0) * -1;
  };

  render() {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
    
    this.calculate()
    return (
      <div className='container'>
        <div className='bal'>
          <Balance total={total} income={income} expense={expense} />
          

          <Transaction
            onSubmit={this.onSubmit}
            onAmountChange={this.onAmountChange}
            onTextChange={this.onTextChange}
          />
        </div>
        
        <div className='his'>
        <ul>
          <HistoryList
            transaction={this.state.historyItem}
            removeHistory={this.removeHistory}
            date={date}
          />
        </ul>
        </div>
      </div>
    );
  }
}

export default App;
