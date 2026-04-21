import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Services } from './components/Services'
import { Store } from './components/Store'
import { Contact } from './pages/Contact'
import { Reformas } from './pages/services/Reformas'
import { ObraNueva } from './pages/services/ObraNueva'
import { MaterialesDetalle } from './pages/services/MaterialesDetalle'
import './styles/index.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/servicios/reformas" element={<Reformas />} />
        <Route path="/servicios/obra-nueva" element={<ObraNueva />} />
        <Route path="/servicios/materiales" element={<MaterialesDetalle />} />
        <Route path="/tienda" element={<Store />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App