import { Route, Routes } from 'react-router-dom'
import CabinetPage from './CabinetPage/Cabinet'
import HomePage from './HomePage/HomePage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/cabinet" exact element={<CabinetPage />} />
      </Routes>
    </>
  )
}

export default App
