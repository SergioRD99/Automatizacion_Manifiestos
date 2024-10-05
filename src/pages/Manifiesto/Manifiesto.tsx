import { TextField, Select, MenuItem, Button, Typography, InputLabel, FormControl, Fab, Tooltip, Box } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import ModalDestinos from "../../components/Destinos/ModalDestinos";
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useManifiesto } from "./useManifiesto";


export default function Manifiesto() {

  //hooks
  const{
    dialogOpen,openFab,formData,residuos,handleChange,handleSelectChange,handleSubmit,
    handleDialogClose,handleExport,buttonFab
  } = useManifiesto()

  //vista
  return (
      <>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 max-w-7xl mx-auto mt-8"
        >
          <Typography variant="h4" className="text-center mb-4">
            Generar Manifiesto
          </Typography>
          <h1  className="font-bold text-center">hola nueva version 2 pruebas del notification</h1>
          <h1  className="font-bold text-center">hola nueva version 2 pruebas del notification</h1>
          {/* Fecha de Recolección */}
          {formData.fechaRecoleccion && (            
          <TextField
            label="Fecha de recoleccion"
            type="date"
            value={formData.fechaRecoleccion}
            disabled
            fullWidth
            required
            className="mb-4"
          />
        )}

          {/* Número de Manifiesto */}
          <TextField
            label="Número de Manifiesto"
            name="numeroManifiesto"
            type="number"
            value={formData.numeroManifiesto > 0 ? formData.numeroManifiesto : String('')}
            onChange={handleChange}
            fullWidth
            required
            className="mb-4"
          />

          <div className="grid gap-4 mb-4 max-md:flex-col grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {/* Razón Social */}
              <TextField
                label="Razón Social"
                name="razonSocial"
                value={formData.razonSocial}
                onChange={handleChange}
                fullWidth
                required
                className="w-full"
              />

              {/* Municipio */}
               <TextField
                label="Municipio"
                name="municipio"
                value={formData.municipio}
                onChange={handleChange}
                fullWidth
                required
                disabled
                className="w-full"
                slotProps={{
                  input:{
                    readOnly:true, // Campo solo lectura
                  }                    
                }}
              />

              {/* Estado */}
              <FormControl fullWidth>
                <InputLabel id="estado-label">Estado</InputLabel>
                <Select
                  labelId="estado-label"
                  name="estado"
                  value={formData.estado}
                  onChange={handleSelectChange}
                  fullWidth               
                  className="w-full"
                >
                  <MenuItem value="">
                    <em>Selecciona un estado</em>  {/* Opción por defecto */}
                  </MenuItem>
                  <MenuItem value="estado1">Puebla</MenuItem>
                  <MenuItem value="estado2">Estado 2</MenuItem>
                </Select>
              </FormControl>
              {/* Transporte */}
          <TextField
            label="Transporte"
            name="transporte"
            value={formData.transporte}
            onChange={handleChange}
            fullWidth
            required
            className="w-full"
          />

          {/* Operador */}
          <TextField
            label="Operador"
            name="operador"
            value={formData.operador}
            onChange={handleChange}
            fullWidth
            required
            className="w-full"
          />

          {/* Fecha de Entrega */}
          <TextField
            label="Fecha de Entrega"
            name="fechaEntrega"
            type="date"
            focused
            value={formData.fechaEntrega}
            onChange={handleChange}            
            fullWidth
            required
            className="w-full"
          />
           {/* Número de Placas */}
           <TextField
            label="Número de Placas"
            name="numeroPlacas"          
            value={formData.numeroPlacas}
            onChange={handleChange}
            fullWidth
            required
            className="w-full"
          />

          {/* RECAT */}
          <TextField
            label="RECAT"
            name="recat"         
            value={formData.recat}
            onChange={handleChange}
            fullWidth  
            className="w-full"
          />

          {/* Fecha de Entrega a Sucursal */}
          <TextField
            label="Fecha de Entrega a Sucursal"
            name="fechaEntregaScursal"
            type="date"
            focused
            value={formData.fechaEntregaScursal}
            onChange={handleChange}            
            fullWidth
            className="w-full"
          />
          </div>
                 
          {/* Observaciones */}
          <TextField
            label="Observaciones"
            name="observaciones"
            value={formData.observaciones}
            onChange={handleChange}
            multiline
            rows={2}
            fullWidth
            className="mb-4"
          />               
         <div className="flex gap-4 mx-auto mt-8 max-md:flex-col justify-center w-full">
            <Button
              variant="contained"
              color="primary"
              className="w-5/12 max-md:w-full"
            >
              Guardar
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="w-5/12 max-md:w-full"
            >
              Siguiente
            </Button>
        </div>
        </form>       
          <ModalDestinos
            open={dialogOpen}
            onClose={handleDialogClose}
            residuos={residuos}
            >
         </ModalDestinos> 
         <Box sx={{ position: 'fixed', bottom: 50, right: 50 }}>
            {/* Botón principal que activa el menú */}
            <Tooltip title="Abrir" arrow>
              <Fab color="primary" aria-label="add" onClick={buttonFab}>
                <AddIcon />
              </Fab>
            </Tooltip>          
            {openFab && (
              <>
                <Tooltip title="Exportar a Excel" arrow>
                  <Fab
                    color="secondary"
                    aria-label="export"
                    onClick={handleExport}
                    sx={{ position: 'absolute', bottom: 60, right: 0 }}
                  >
                    <SimCardDownloadIcon />
                  </Fab>
                </Tooltip>
                <Tooltip title="Subir Imagen" arrow>
                  <Fab
                    color="secondary"
                    aria-label="upload"
                    onClick={() => console.log('Subir Imagen')}
                    sx={{ position: 'absolute', bottom: 120, right: 0 }}
                  >
                    <CloudUploadIcon />
                  </Fab>
                </Tooltip>
              </>
            )}
          </Box>
      </>
  )
}
