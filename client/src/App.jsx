import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AuthPage from './pages/auth'
import ScrumBoardPage from './pages/scrum-board'
import TaskPage from './pages/tasks'
import CommonLayout from './components/common-layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/tasks' element={<CommonLayout />} >
            <Route path='list' element={<TaskPage /> } />
            <Route path='scrum-board' element={<ScrumBoardPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
