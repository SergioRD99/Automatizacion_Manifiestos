import { Dialog, DialogTitle, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, DialogActions, Button, TextField, Autocomplete } from "@mui/material";
import { useDestinos } from "./useDestinos";
import type { DestintoDialogProps } from "./residuosTypes";



export default function ModalDestinos({ open, onClose, residuos }: DestintoDialogProps) {
  
  const{
    localResiduos, selectedDestino,setSelectedDestino, bitacoraOpen, destinos, handleInputChange, handleGuardar,
    handleTerminar,handleBitacora,handleBitacoraClose
  } = useDestinos({open,onClose,residuos})

  return (
    <>
    <Dialog open={open} onClose={() => onClose(localResiduos)} maxWidth="sm" fullWidth>
      <DialogTitle className="text-center">Residuos</DialogTitle>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="text-center">Nombre del Residuo</TableCell>
              <TableCell className="text-center">Valor</TableCell>
              <TableCell className="text-center">KG Peso Casco</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(localResiduos).map((key) => (
              <TableRow key={key}>
                <TableCell className="text-center">{key}</TableCell>
                <TableCell className="text-center">
                  <TextField
                    name={key}
                    value={localResiduos[key as keyof typeof localResiduos]}
                    onChange={handleInputChange}
                    type="number"
                    className="w-full"
                  />                  
                </TableCell>
                <TableCell>                                         
                    <p className="font-bold">
                      KG: {Number(localResiduos[key as keyof typeof localResiduos])+10}
                    </p>
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
