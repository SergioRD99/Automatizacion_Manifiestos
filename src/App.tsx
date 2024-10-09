import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Manifiesto from "./pages/Manifiesto/Manifiesto"
import Historico from "./pages/Historico/Historico"
import RecatView from "./pages/Recat/RecatView"
import UnidadesView from "./pages/Unidades/UnidadesView"
import AppBar from "./components/AppBar/AppBar"
import { useEffect } from "react"
import { updateSW } from "./utils/sw-update"
import Login from "./pages/login"

function App() { 
  useEffect(() => {
    // Registrar el SW cuando la app se monta
    updateSW();
  }, []);

   // Efecto para manejar el permiso de notificaciones
   useEffect(() => {
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          console.log('Permiso de notificaciones concedido.');
          
          showNotification('Bienvenido', {
            body: 'Gracias por permitir las notificaciones. ¡Mantente informado!',
            icon: 'path/to/icon.png' // Reemplaza con la ruta a tu icono
          });
        } else {
          console.log('Permiso de notificaciones denegado');
        }
      });
    }
  }, []);

  // Función para mostrar la notificación
  const showNotification = (title: string, options: NotificationOptions) => {
    if (Notification.permission === 'granted') {
      new Notification(title, options);
    }
  };

  return (
    <div className="app-container">      
      <Router>
        <AppBar />
        {/* Rutas para navegacion  */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Manifiesto />} />
            <Route path="/login" element={<Login/>} />
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
