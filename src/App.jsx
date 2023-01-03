import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="Video">
        <iframe
          width="960"
          height="615"
          src="https://www.youtube.com/embed/7EmboKQH8lM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
      <div className="Comments">
        Comments goes here
      </div>
    </div>
  )
}

export default App
