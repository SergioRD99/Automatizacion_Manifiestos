import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Manifiesto from "./pages/Manifiesto/Manifiesto"
import Historico from "./pages/Historico/Historico"
import RecatView from "./pages/Recat/RecatView"
import UnidadesView from "./pages/Unidades/UnidadesView"
import AppBar from "./components/AppBar/AppBar"

function App() { 

  return (
    <Router>
      <>
        <AppBar></AppBar>

        <Routes>
          <Route path="/" element={<Manifiesto/>}/>
          <Route path="/historico" element={<Historico/>}/>        
          <Route path="/recat" element={<RecatView/>}/>
          <Route path="/unidades" element={<UnidadesView/>}/>    
        </Routes>
      </>
    </Router>
  )
}

export default App
