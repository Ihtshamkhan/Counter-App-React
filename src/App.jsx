import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [num, setNum] = useState(0)
    const reset = () => setNum(0)
  
    return (
      <>
           
           <h2>Counter App</h2>
  
        <button onClick={() => {
          setNum(num + 1)
        }}>
          +
        </button>
  
        <h1>{num}</h1> 
  
  
        <button onClick={() => {
          setNum(num - 1)
        }}>
          -
        </button>
        <br />
        <br />
  
        <button onClick={reset}>Reset</button>
  
      </>
    )
  }
  


export default App
