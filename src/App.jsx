import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  // Update the background color of the body
  document.body.style.backgroundColor = color

  return (
    <>
    <h1 className='mb-4'>Your Desired color is {color.toUpperCase()}</h1>
      <div className='bg-yellow-500 h-28 w-auto flex gap-5 items-center p-5 border-4 border-black shadow-2xl'>

        <button onClick={() => setColor('red')} className='h-14 w-36 bg-red-700 text-white shadow-lg shadow-black'>Red</button>
        <button onClick={() => setColor('green')} className='h-14 w-36 bg-green-700 text-white shadow-lg shadow-black'>Green</button>
        <button onClick={() => setColor('purple')} className='h-14 w-36 bg-purple-700 text-white shadow-lg shadow-black'>Purple</button>
        <button onClick={() => setColor('orange')} className='h-14 w-36 bg-orange-700 text-white shadow-lg shadow-black'>Orange</button>
        <button onClick={() => setColor('teal')} className='h-14 w-36 bg-teal-300 text-white shadow-lg shadow-black'>Teal</button>
        <button onClick={() => setColor('pink')} className='h-14 w-36 bg-pink-700 text-white shadow-lg shadow-black'>Pink</button>
        <button onClick={() => setColor('gray')} className='h-14 w-36 bg-gray-700 text-white shadow-lg shadow-black'>Gray</button>
        <button onClick={() => setColor('yellow')} className='h-14 w-36 bg-yellow-700 text-white shadow-lg shadow-black '>Yellow</button>
      </div>
    </>
  )
}

export default App
