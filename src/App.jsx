import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Footer from './common/Footer'
import Boton from './common/Boton'
import Header from './common/Header'
import Inicio from './pages/Inicio'
import AcercadeNosotros from './pages/AcercadeNosotros'
import Contacto from './pages/Contacto'
import MiCuenta from './pages/MiCuenta'
import Equipo from './pages/Equipo'




function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main id='main-content'>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/acercadenosotros" element={<AcercadeNosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/micuenta" element={<MiCuenta />} />
            <Route path="/equipo" element={<Equipo />} />
        
          </Routes>
        </main>
        <Boton />
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App
//<Route path="/inversiones" element={<Inversiones />} />
