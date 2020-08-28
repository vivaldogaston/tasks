import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import { useState } from 'react';
import { render } from '@testing-library/react';

function App() {

  const [tasks,setTasks]=useState([]);
  const add=()=>{
    if(document.getElementById("task").value.trim()===""){
      alert("Enter something!");
    }
    else{
    setTasks(tasks=> [...tasks,
      {id:tasks.length,value: document.getElementById("task").value, done:false}])
    }
  }
  const done=(index,id,value,done)=>{
    tasks[index]={id:id,value: value, done:!done};
    setTasks([...tasks])
    
  }

  const del=(x)=>{
    tasks.splice(x,1);
    setTasks(tasks=>[...tasks])
  }
  const tasks_completed=()=>{
    var completed=0;
    for(var i=0;i<tasks.length;i++){
      if(tasks[i]['done']){
        completed+=1;
      }
  }
  return completed;
  };
  const tasks_n_completed=()=>{
    var not_completed=0;
    for(var i=0;i<tasks.length;i++){
      if(tasks[i]['done']===false){
        not_completed+=1;
      }
  }
  return not_completed;
  };
 
  return (
    <div className="App-header">
      <h1>TASKS</h1>
    <div className="div">
        <div>
          <input id="task" type="text" autoFocus></input>
          <button onClick={()=>add()}>Add</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Completed</th>
              <th>Remove</th>
            </tr>
          </thead>
          {tasks.map((task,index) => (
          <tbody>
            <tr>
              <td style={{textAlign:"start"}}>{task.value}</td>
              <td>
                  <input type="checkbox" onClick={()=>done(index,task.id,task.value,task.done)} value={task.done?'Completed':'Not Completed'}></input>
              </td>
              <td>
                  <button onClick={()=>del(index)}>Remover</button>
              </td>
            </tr>
          </tbody>
          ))}
        </table>
        <h3>Completed:{tasks_completed()}</h3>
        <h3>Not Completed:{tasks_n_completed()}</h3>
    </div>

    </div>
  );
  
}

export default App;
