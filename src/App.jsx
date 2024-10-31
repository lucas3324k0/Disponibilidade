import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <>
    <div className='disp'>
      <h1>Disponibilidade</h1>
      <h3> Louvor Novo tempo</h3>
    </div>
    <NavBar />
    <Outlet />
    </>
  )
}

export default App
