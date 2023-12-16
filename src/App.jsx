import { useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import CabinetPage from './CabinetPage/Cabinet'
import HomePage from './HomePage/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Working</h1>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/cabinet" exact element={<CabinetPage />} />
      </Routes>
    </>
  )
}

export default App
