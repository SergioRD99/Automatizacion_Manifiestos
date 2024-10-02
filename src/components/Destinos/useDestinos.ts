import { useEffect, useState } from "react";
import type { DestintoDialogProps } from "./residuosTypes";
  
export const useDestinos = ({ onClose, residuos}: DestintoDialogProps) =>{

    const [localResiduos, setLocalResiduos] = useState(residuos);
    const [selectedDestino, setSelectedDestino] = useState<string | null>(null);
    const [bitacoraOpen, setBitacoraOpen] = useState(false);
    const destinos = ["Destino 1", "Destino 2", "Destino 3", "Destino 4"];
    

    // Sincronizar residuos cuando el prop cambie
    useEffect(() => {
      setLocalResiduos(residuos);
    }, [residuos]);

    
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    
    setLocalResiduos((prevResiduos) => ({
      ...prevResiduos,
      [name]: value
    }));
  };
  
  
  
  const handleGuardar = () => {
    console.log('Datos guardados:', residuos);
    onClose(localResiduos);
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

  return{
    localResiduos,
    selectedDestino,
    setSelectedDestino,
    bitacoraOpen,
    destinos,
    handleInputChange,
    handleGuardar,
    handleTerminar,
    handleBitacora,
    handleBitacoraClose
  }
}
