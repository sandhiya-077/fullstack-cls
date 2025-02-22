import React from 'react'
import './App.css'
import { useState } from 'react'
function App(){


  const [name,setName]=useState("");
  const [age,setAge]=useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(name);
    console.log(age);
  }
return (
  <>
  <div>
    <form className='form' onSubmit={handleSubmit}>
      <h1>Registration Form</h1>
      <input className='input' type="text" required value={name} placeholder="Enter your Name" onChange={(e)=>setName(e.target.value)}/>
      <input className='input' type="text" required value={age} placeholder='Enter your Age' onChange={(e)=>setAge(e.target.value)}/>
      <input className='email' type="emai" required placeholder='Enter your Email'/>
      <input className='password' type="password" required placeholder='Enter your Password'/>
      <input className='DOB' type="Date" required placeholder='Enter your date'/>
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  </div>
</>
);
};

export default App
