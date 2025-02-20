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
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <>
    <h1>R Sandhiya</h1>
    <div className={isDarkMode ? "dark-theme" : "light-theme"}>
      <div className="content">
        <h1 style={{ textAlign: "center", color: isDarkMode ? "#F9F6E6" : "darkred" }}>
          Friends Forever :)
        </h1>
      <Comp1 name={details.name} Rollno={details.Rollno} />
      <Comp1 name1={info2.name1} Rollno1={info2.Rollno1}/>
      <h2 stlye={{textAlign:"center",color:"black"}}>My SecId is {details.SecId}</h2>
      <button onClick={()=>{alert('Onclick is clicked')}}>click</button>
      <button onDoubleClick={()=>{alert('On double click is clicked')}}>Double click </button>
      <button className="toggle-button" onClick={toggleTheme}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  </div>
  
      
 
    </>
  )
}

export default App
