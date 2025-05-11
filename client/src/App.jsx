import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/homepage'
import AdminChallenges from './pages/admin/Challengesmanagement'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path='/challengemanagement' element={<AdminChallenges/>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
