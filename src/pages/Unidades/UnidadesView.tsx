import  { useState } from "react";
import SwitchButton from "../../components/SwitchButton/switchButton";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Switch } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DialogUnidades from "../../components/ModalUnidades/DialogUnidades";

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


export default function UnidadesView() {
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

  return (
    <>
      <div className="grid justify-center py-5 ">
        <div className="text-center">
        <SwitchButton
          isTogled={isTogled}
          handleTogle={handleTogle}          
        />
        </div>
        
        <h2 className=" mt-10 text-2xl mb-5">{isTogled ? 'Placas' : 'Transporte'}</h2>

        {isTogled ? (
          <div>
            <TableContainer 
              component={Paper}               
              sx={{
                width: { xs: '100vw', sm: 'calc(100vw - 150px)' },
                margin: { xs: '0', sm: '0 20px' },
                overflowX: 'auto',
              }}
            >
            <Table aria-label="Placas table">
              <TableHead>
                <TableRow>                  
                  <TableCell sx={{ minWidth: 'auto',  sm: '500px' }}>Sucursal</TableCell>
                  <TableCell sx={{ minWidth: 'auto',  sm: '500px' }}>Placa</TableCell>
                  <TableCell sx={{ minWidth: 'auto' , sm: '500px' }}>Activo</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>                   
                    <TableCell>{row.sucursal}</TableCell>
                    <TableCell>{row.placa}</TableCell>
                    <TableCell>
                    <Switch
                        checked={!!selectedRowsPlacas[index]} 
                        onChange={() => handleCheckboxChangePlacas(index)} 
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <div className="grid w-full mt-5 justify-center sm:justify-end">
              <Button  onClick={() => handleOpenDialog('placa')} sx={{ width: '20rem', marginRight: '20px', background:'#002D59' }} variant="contained" endIcon={<AddCircleOutlineIcon />}>
                 Nueva Placa
              </Button>
          </div>
          </div>
        ) : (
          <div>
            <TableContainer
              component={Paper}
              sx={{
                width: { xs: '100vw', sm: 'calc(100vw - 150px)' },
                margin: { xs: '0', sm: '0 20px' },
                overflowX: 'auto',
              }}
            >
              <Table aria-label="Transporte tabla">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ minWidth: { xs: 'auto', sm: '500px' } }}>Sucursal</TableCell>
                    <TableCell sx={{ minWidth: { xs: 'auto', sm: '500px' } }}>Transporte</TableCell>
                    <TableCell sx={{ minWidth: { xs: 'auto', sm: '150px' } }}>Activo</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowsTransport.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.sucursal}</TableCell>
                      <TableCell>{row.transporte}</TableCell>
                      <TableCell>
                        <Switch
                          checked={!!selectedRowsTransport[index]}
                          onChange={() => handleCheckboxChangeTransport(index)}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

              <div className="grid w-full mt-5 justify-center sm:justify-end">
                <Button 
                  onClick={() => handleOpenDialog('transporte')} 
                  sx={{ width: '20rem', marginRight: '20px', background:'#002D59' }} 
                  variant="contained" 
                  endIcon={<AddCircleOutlineIcon />}        
                >
                  Nuevo Transporte
                </Button>               
              </div>
          </div>          
        )}
        <DialogUnidades
          open={dialogOpen}
          title={dialogType === 'placa' ? 'Agregar Placa': 'Agregar Transporte'}
          nameTexfield={dialogType === 'placa'?'Placa': 'Transporte'}
          nameTextField2="Sucursal"
          onClose={handleCloseDialog}
        />
      </div>
    </>
  );
}
