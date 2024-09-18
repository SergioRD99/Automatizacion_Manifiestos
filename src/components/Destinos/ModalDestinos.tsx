import { Dialog, DialogTitle, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, DialogActions, Button, TextField, Autocomplete } from "@mui/material";
import { useState } from "react";

interface DestintoDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function ModalDestinos({ open, onClose }: DestintoDialogProps) {
  const [residuos, setResiduos] = useState({
    GP01: '',
    GP02: '',
    GP03: '',
    GP04: '',
    GP05: '',
    GP06: '',
    GP07: ''
  });

  const [bitacoraOpen, setBitacoraOpen] = useState(false);
  const [selectedDestino, setSelectedDestino] = useState<string | null>(null);
  
  const destinos = ["Destino 1", "Destino 2", "Destino 3", "Destino 4"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setResiduos({
      ...residuos,
      [name]: value
    });
  };

  const handleGuardar = () => {
    console.log('Datos guardados:', residuos);
  };

  const handleTerminar = () => {
    console.log('Proceso terminado');
  };

  const handleBitacora = () => {
    setBitacoraOpen(true);  // Abrir el dialog de bitácora
  };

  const handleBitacoraClose = () => {
    setBitacoraOpen(false); // Cerrar el dialog de bitácora
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
        <DialogTitle className="text-center">Formulario de Residuos</DialogTitle>
        <TableContainer >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="text-center">Nombre del Residuo</TableCell>
                <TableCell className="text-center">Valor Numérico</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(residuos).map((key) => (
                <TableRow key={key}>
                  <TableCell className="text-center">{key}</TableCell>
                  <TableCell className="text-center">
                    <TextField
                      name={key}
                      value={residuos[key as keyof typeof residuos]}
                      onChange={handleInputChange}
                      type="number"
                      className="w-full"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <DialogActions className="flex flex-col items-center gap-4">
          <div className="flex gap-4 justify-center">
            <Button onClick={handleGuardar} color="primary" variant="contained" className="w-32">
              Guardar
            </Button>
            <Button onClick={handleTerminar} color="primary" variant="contained" className="w-32">
              Terminar
            </Button>
            <Button onClick={handleBitacora} color="primary" variant="contained" className="w-32">
              Bitácora
            </Button>
          </div>   
        </DialogActions>
      </Dialog>

      {/* Segundo dialog para Bitácora */}
      <Dialog open={bitacoraOpen} onClose={handleBitacoraClose} maxWidth="sm" fullWidth>
        <DialogTitle className="text-center">Seleccionar Destino</DialogTitle>
        <div className="p-4">
          <Autocomplete
            options={destinos}
            value={selectedDestino}
            onChange={(_event, newValue) => setSelectedDestino(newValue)}
            renderInput={(params) => (
              <TextField {...params} label="Seleccione un destino" variant="outlined" fullWidth />
            )}
            className="mb-4"
          />
        </div>
        <DialogActions className="flex justify-center">
          <Button onClick={handleBitacoraClose} color="primary" variant="contained">
            Guardar bitacora
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
