import { BrowserRouter, Route, Routes } from 'react-router'

import Inicio from '@/paginas/inicio'
import Sobre from '@/paginas/sobre'
import Postagem from '@/paginas/postagem'
import NaoEncontrada from '@/paginas/naoEncontrada'

import ScrollToTop from '@/componentes/ScrollToTop'
import Menu from '@/componentes/menu'
import Rodape from '@/componentes/rodape'
import PaginaPadrao from '@/componentes/paginaPadrao'

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu/>

      <Routes>
        <Route path='/' element={<PaginaPadrao/>}>
          <Route index element={<Inicio/>}/>
          <Route path='sobre' element={<Sobre/>}/>
        </Route>
        
        <Route path='posts/:id/*' element={<Postagem/>}/>

        <Route path='*' element={<NaoEncontrada/>}/>
      </Routes>

      <Rodape/>
    </BrowserRouter>
  )
}

export default AppRoutes
