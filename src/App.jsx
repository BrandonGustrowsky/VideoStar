import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import VideoCard from './components/VideoCard'

function App() {
  const [count, setCount] = useState(0)
  const colors = {
    gray : "#525E75",
    cream : "#F1DDBF",
    green : "#78938A",
    purple : "#C400E4",
    gold : "#DAA520",
  }

  return (
    <div>
      <VideoCard />
    </div>
  )
}

export default App
