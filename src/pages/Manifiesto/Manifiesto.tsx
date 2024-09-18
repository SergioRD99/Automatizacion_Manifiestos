import { useState } from "react";
import type { ManifestForm } from "./ManifiestoTypes"
import { TextField, Select, MenuItem, Button, Typography, SelectChangeEvent } from "@mui/material"
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Cambia específico para el select
  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
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
          className="flex flex-col gap-4 max-w-6xl mx-auto mt-8"
        >
          <Typography variant="h4" className="text-center mb-4">
            Generar Manifiesto
          </Typography>

          {/* Fecha de Recolección */}
          <TextField    
            type="date"
            value={formData.fechaRecoleccion}
            onChange={handleChange}          
            fullWidth
            disabled
            required
            className="mb-4"
          />

          {/* Número de Manifiesto */}
          <TextField
            label="Número de Manifiesto"
            name="numeroManifiesto"
            type="number"
            value={formData.numeroManifiesto}
            onChange={handleChange}
            fullWidth
            required
            className="mb-4"
          />

          <div className="flex gap-4 mb-4">
              {/* Razón Social */}
              <TextField
                label="Razón Social"
                name="razonSocial"
                value={formData.razonSocial}
                onChange={handleChange}
                fullWidth
                required
                className="flex-1"
              />

              {/* Municipio */}
              <TextField
                label="Municipio"
                name="municipio"
                value={formData.municipio}
                onChange={handleChange}
                fullWidth
                required
                className="flex-1"
              />

              {/* Estado */}
              <Select
                label="Estado"
                name="estado"
                value={formData.estado}
                onChange={handleSelectChange}
                fullWidth
                required
                className="flex-1"
              >
                <MenuItem value="">Selecciona un estado</MenuItem>
                <MenuItem value="estado1">Estado 1</MenuItem>
                <MenuItem value="estado2">Estado 2</MenuItem>
              </Select>
          </div>

          {/* Transporte */}
          <TextField
            label="Transporte"
            name="transporte"
            value={formData.transporte}
            onChange={handleChange}
            fullWidth
            required
            className="mb-4"
          />

          {/* Operador */}
          <TextField
            label="Operador"
            name="operador"
            value={formData.operador}
            onChange={handleChange}
            fullWidth
            required
            className="mb-4"
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
            className="mb-4"
          />

          {/* Número de Placas */}
          <TextField
            label="Número de Placas"
            name="numeroPlacas"          
            value={formData.numeroPlacas}
            onChange={handleChange}
            fullWidth
            required
            className="mb-4"
          />

          {/* RECAT */}
          <TextField
            label="RECAT"
            name="recat"         
            value={formData.recat}
            onChange={handleChange}
            fullWidth
            required
            className="mb-4"
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
            className="mb-4"
          />

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
         <div className="flex gap-4 max-w-6xl mx-auto mt-8 items-end max-md:flex-col">
            <Button
              variant="contained"
              color="primary"
              className="w-80 text-sm md:text-base py-2 md:py-3 rounded-lg"
            >
              Guardar
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="w-80 text-sm md:text-base py-2 md:py-3 rounded-lg"
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
