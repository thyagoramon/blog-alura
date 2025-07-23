import { BrowserRouter, Route, Routes } from 'react-router'
import Inicio from './paginas/inicio'
import Sobre from './paginas/sobre'
import NaoEncontrada from './paginas/naoEncontrada'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
        <Route path='*' element={<NaoEncontrada/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
