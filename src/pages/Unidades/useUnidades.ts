import { useState } from "react";


export const useUnidades = () =>{

    const rows = [
        { sucursal: 'Sucursal 1', placa: 'ABC1234' },
        { sucursal: 'Sucursal 2', placa: 'XYZ5678' },
        { sucursal: 'Sucursal 3', placa: 'DEF91011' },
        { sucursal: 'Sucursal 1', placa: 'ABC1234' },
        { sucursal: 'Sucursal 2', placa: 'XYZ5678' },
        { sucursal: 'Sucursal 3', placa: 'DEF91011' },
    ];
    
    const rowsTransport = [
        { sucursal: 'Sucursal 1', transporte: 'Transporte' },
        { sucursal: 'Sucursal 2', transporte: 'Transporte' },
        { sucursal: 'Sucursal 3', transporte: 'Transporte' },
        { sucursal: 'Sucursal 1', transporte: 'Transporte' },
        { sucursal: 'Sucursal 2', transporte: 'Transporte' },
        { sucursal: 'Sucursal 3', transporte: 'Transporte' },
    ];
    
    const [isTogled, setTogled] = useState(false);
    const [selectedRowsPlacas, setSelectedRowsPlacas] = useState<{ [key: number]: boolean }>({});
    const [selectedRowsTransport, setSelectedRowsTransport] = useState<{ [key: number]: boolean }>({});

    const [dialogOpen, setDialogOpen] = useState(false); // Estado para el diálogo
    const [dialogType, setDialogType] = useState<'placa' | 'transporte' | null>(null); // Estado para tipo de acción


    // Abrir el diálogo con un tipo específico
    const handleOpenDialog = (type: 'placa' | 'transporte') => {
      setDialogType(type);
      setDialogOpen(true);
    };
  
    const handleCloseDialog = () => {
      setDialogOpen(false);
      setDialogType(null);
    };
   

    const handleTogle = () => {
        setTogled((prevState) => !prevState);
    };

    const handleCheckboxChangePlacas = (index: number) => {
        setSelectedRowsPlacas((prevSelectedRows) => ({
        ...prevSelectedRows,
        [index]: !prevSelectedRows[index],
        }));
    };

    const handleCheckboxChangeTransport = (index: number) => {
        setSelectedRowsTransport((prevSelectedRows) => ({
        ...prevSelectedRows,
        [index]: !prevSelectedRows[index],
        }));
    };

    return{
        rows,
        rowsTransport,
        isTogled,
        selectedRowsPlacas,
        selectedRowsTransport,
        dialogOpen,
        dialogType,
        handleOpenDialog,
        handleCloseDialog,
        handleTogle,
        handleCheckboxChangePlacas,
        handleCheckboxChangeTransport
    }
}