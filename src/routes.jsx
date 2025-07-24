import { BrowserRouter, Route, Routes } from 'react-router'

import Inicio from './paginas/inicio'
import Sobre from './paginas/sobre'
import Postagem from './paginas/postagem'
import NaoEncontrada from './paginas/naoEncontrada'

import Menu from './componentes/menu'
import Rodape from './componentes/rodape'
import PaginaPadrao from './componentes/paginaPadrao'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>

      <Routes>
        <Route path='/' element={<PaginaPadrao/>}>
          <Route index element={<Inicio/>}/>
          <Route path='sobre' element={<Sobre/>}/>
          <Route path='posts/:id' element={<Postagem/>}/>
        </Route>

        <Route path='*' element={<NaoEncontrada/>}/>
      </Routes>

      <Rodape/>
    </BrowserRouter>
  )
}

export default AppRoutes
