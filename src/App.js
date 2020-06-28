import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { render } from '@testing-library/react';

function App() {

  const [tasks,setTasks]=useState([]);
  const add=()=>{
    setTasks(tasks=> [...tasks,
      {id:tasks.length,value: document.getElementById("task").value, done:false}])
      
  }
  const done=(index,id,value,done)=>{
    tasks[index]={id:id,value: value, done:!done};
    setTasks([...tasks])
    
  }

  const del=(x)=>{
    tasks.splice(x,1);
    setTasks(tasks=>[...tasks])
  }
  return (
  
    <div className="" style={{margin:"auto",width:"700px",border:"solid",textAlign:"center"}}>
      
        <input id="task" type="text"></input>
        <button onClick={()=>add()}>Adicionar</button>
        <ul style={{listStyle:"decimal"}}>
        {tasks.map((task,index) => (
        <li key={task.id}>{task.value} | 
        <button onClick={()=>done(index,task.id,task.value,task.done)}>{task.done?'Completada':'Não Completada'}</button> | 
        <button onClick={()=>del(index)}>Remover</button>
        </li>
      )) }
      
      </ul>
          
       
       
    </div>
    
  );
  
}

export default App;
