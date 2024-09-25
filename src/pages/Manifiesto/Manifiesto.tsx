import { useState } from "react";
import type { ManifestForm } from "./ManifiestoTypes"
import { TextField, Select, MenuItem, Button, Typography, SelectChangeEvent, InputLabel, FormControl } from "@mui/material"
import ModalDestinos from "../../components/Destinos/ModalDestinos";


export default function Manifiesto() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const [formData, setFormData] = useState<ManifestForm>({
    fechaRecoleccion: '',
    numeroManifiesto: 0,
    razonSocial: '',
    municipio: '',
    estado: '',
    transporte: '',
    operador: '',
    fechaEntrega: '',
    numeroPlacas: '',
    recat: '',
    fechaEntregaScursal: '',
    observaciones: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      ...(name === 'fechaEntrega' && { fechaRecoleccion: value }), // Sincroniza las fechas
      ...(name === 'razonSocial'&& {municipio:value}),      
    }));
  };


   // Cambia específico para el select
  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      ...(name === 'razonSocial' && { estado: value === "razonSocial1" ? "Puebla" : "" })
    }));
  };
 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDialogOpen(true);
    console.log(formData);
  };

  const handleDialogClose = () => {
    setDialogOpen(false); // Cerrar el modal
  };

  
  return (
      <>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 max-w-7xl mx-auto mt-8"
        >
          <Typography variant="h4" className="text-center mb-4">
            Generar Manifiesto
          </Typography>

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
            required
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
            rows={4}
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
            >
         </ModalDestinos> 
      </>
  )
}
