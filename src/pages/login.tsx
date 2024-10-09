import { Button, TextField } from "@mui/material";

export default function Login() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center w-1/5 h-2/4 rounded-3xl shadow-2xl gap-5 bg-slate-100 max-md:w-full max-md:h-full">
          <h1 className="font-bold text-3xl mb-5 w-full text-center">Iniciar sesión</h1>
          
          {/* Ajustamos los TextField para que estén centrados */}
          <TextField 
            sx={{width: '100%', maxWidth: '25rem'}}    
            label="Usuario"           
            type="text"
            placeholder="Usuario"  
          />

          <TextField
            sx={{width: '100%', maxWidth: '25rem'}}
            label="Contraseña"
            type="password"
            placeholder="Contraseña"  
          />

          <div className="text-center w-full">
            <Button
              variant="outlined"
              sx={{width: '100%', maxWidth: '25rem', backgroundColor:'#002D59', color:'white', borderRadius:'1rem'}}
            >
              Iniciar Sesión
            </Button>
          </div>
        </div>                
      </div>
    </>
  )
}
