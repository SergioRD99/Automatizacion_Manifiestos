import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Manifiesto from "./pages/Manifiesto/Manifiesto"
import Historico from "./pages/Historico/Historico"
import RecatView from "./pages/Recat/RecatView"
import UnidadesView from "./pages/Unidades/UnidadesView"
import AppBar from "./components/AppBar/AppBar"
import { useEffect } from "react"
import { updateSW } from "./utils/sw-update"

function App() { 
  useEffect(() => {
    // Registrar el SW cuando la app se monta
    updateSW();
  }, []);
  return (
    <div className="app-container">
      <Router>
        <AppBar />
        {/* Rutas para navegacion  */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Manifiesto />} />
            <Route path="/historico" element={<Historico />} />
            <Route path="/recat" element={<RecatView />} />
            <Route path="/unidades" element={<UnidadesView />} />
          </Routes>
        </div>
      </Router>
        
      <footer className="mt-10 text-white flex justify-center py-2 bg-[#002D59]">
        <p className="text-center">© 2024 Ciosa AutoTodo - Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App
