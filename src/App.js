import React, { useState } from 'react';
import './App.css';

function App(props) {
 
  const[todo,setTodo]=useState(false);
  const[budget,setBudget]=useState(false);

  const todoHandler = () =>{
    setTodo(true);
    if(todo){
      props.history.push("/todo")
    }
  }
  
  const budgetHandler = () =>{
    setBudget(true);
    if(budget){
      props.history.push("/budget")
    }
  }

  return(
    <div className="App">
      <button className="btn btn-success button" onClick={todoHandler}><div><i class="fas fa-clipboard-list"></i></div>To Do List</button>
      <button className="btn btn-warning button" onClick={budgetHandler}><div><i class="fas fa-wallet"></i></div>Budget Manager</button>
    </div>
  )
}

export default App;
