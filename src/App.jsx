import { useState } from 'react'
import RandomUser from "./Pages/RandomUserPage.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RandomUser />
      
    </>
  )
}

export default App
