import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MenuComponent from "./components/Menu/MenuComponent"
import Manifiesto from "./pages/Manifiesto/Manifiesto"
import Historico from "./pages/Historico/Historico"
function App() { 

  return (
    <Router>
      <>
      <MenuComponent/>

        <Routes>
          <Route path="/" element={<Manifiesto/>}/>
          <Route path="/historico" element={<Historico/>}/>        
        </Routes>
      </>
    </Router>
  )
}

export default App
