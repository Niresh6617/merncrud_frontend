import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './Styles.css'
import { View } from './View'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
    <h1>LMS Project</h1>
    <View></View>
  </div>
  )
}

export default App
