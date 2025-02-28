import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15) //use of hooks 

  const addValue = () =>{
    if(counter < 20 ){
      counter = counter + 1
    }
    else{
      alert("Counter value can't be greater than 20")
    }
    setCounter(counter)
  }

  const removeValue = () =>{
    if(counter > 0 ){
      counter = counter - 1
    }
    else{
      alert("Counter value can't be negative")
    }
    setCounter(counter)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>counter value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>

    </>
  )
}

export default App
