import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='gameName'><span className='span-1'>Tic</span> <span className='span-2'>Tac</span> <span className='span-3'>Toe</span> Game</h1>
      <Card/>
    </>
  )
}

export default App;
