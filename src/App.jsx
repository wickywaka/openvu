import { useState } from 'react'
import './App.css'
import LecturePage from './components/LecturePage'

function App() {

  return (
    <div className="App">
      <LecturePage source={"https://www.youtube.com/embed/7EmboKQH8lM"} />
    </div>
  )
}

export default App
