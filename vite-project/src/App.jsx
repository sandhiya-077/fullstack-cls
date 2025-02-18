import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp1 from './Comp1'

function App() {
  let name="Sandhiya"
  const details={
    name:"Sandhiya",
    dept:"M.Tech cse",
    SecId:"Sec23cj046",
    Rollno:22,
  }
  const info2={
    name1:"Rajalakshmi",
    dept:"M.tech cse",
    SecId:"Sec23cj001",
    Rollno1:18,
  }
  return (
    <>
    <div>
    <h1 style={{textAlign:"center",color:"pink"}}>Friends forever</h1>
      <Comp1 name={details.name} Rollno={details.Rollno} />
      <Comp1 name1={info2.name1} Rollno1={info2.Rollno1}/>
      <h2 stlye={{textAlign:"center",color:"black"}}>My SecId is {details.SecId}</h2>
      <button onClick={()=>{alert('Onclick is clicked')}}>click</button>
      <button onDoubleClick={()=>{alert('On double click is clicked')}}>Double click </button>

      
    </div>
    </>
  )
}

export default App
