import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Footer from './common/Footer'
import Header from './common/Header'
import Inicio from './pages/Inicio'
import Clientes from './pages/Clientes'
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
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/acercadenosotros" element={<AcercadeNosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/micuenta" element={<MiCuenta />} />
            <Route path="/equipo" element={<Equipo />} />
        
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App
//<Route path="/inversiones" element={<Inversiones />} />
