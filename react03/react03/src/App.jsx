import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
   <div className="w-full h-screen duration-200" style={{backgroundColor : color}}>

    <button onClick={() => setColor("red")} className="bg-white-500 text-black p-4 rounded">  
      red
    </button>

     <button onClick={() => setColor("")} className="bg-white-500 text-black p-4 rounded">  
      reset
    </button>

   </div>
  )
}

export default App
