import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home' 
import TableComp from './pages/Table'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<Home />} />
          <Route path='/table' element={<TableComp />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
