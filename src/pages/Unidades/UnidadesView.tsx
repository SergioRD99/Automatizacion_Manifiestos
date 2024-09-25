import { useState } from "react";
import SwitchButton from "../../components/SwitchButton/switchButton";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

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
      <div className="grid justify-center py-5">
        <SwitchButton
          isTogled={isTogled}
          handleTogle={handleTogle}
          label={isTogled ? 'Placas' : 'Transportes'}
        />
        
        <h2 className=" mt-10 text-2xl mb-5">{isTogled ? 'Placas' : 'Transporte'}</h2>

        {isTogled ? (
          <div>
            <TableContainer 
              component={Paper} 
              sx={{ width: 'calc(100vw - 150px)', margin: '0 20px' }} // Ancho completo con margen
            >
            <Table aria-label="Placas table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ minWidth: '150px' }}>Estatus</TableCell>
                  <TableCell sx={{ minWidth: '500px' }}>Sucursal</TableCell>
                  <TableCell sx={{ minWidth: '500px' }}>Placa</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>
                    <Checkbox
                        checked={!!selectedRowsPlacas[index]} // Usar el estado de Placas
                        onChange={() => handleCheckboxChangePlacas(index)} // Usar la función de cambio de Placas
                      />
                    </TableCell>
                    <TableCell>{row.sucursal}</TableCell>
                    <TableCell>{row.placa}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <div className="grid justify-end mt-5 w-full">
              <Button sx={{ width: '20rem', marginRight: '20px' }} variant="contained" endIcon={<AddCircleOutlineIcon />}>
                 Nueva Placa
              </Button>
          </div>
          </div>
        ) : (
          <div>
            <TableContainer 
              component={Paper} 
              sx={{ width: 'calc(100vw - 150px)', margin: '0 10px' }} // Ancho completo con margen
            >
            <Table aria-label="Transporte table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ minWidth: '150px' }}>Estatus</TableCell>
                  <TableCell sx={{ minWidth: '400px' }}>Sucursal</TableCell>
                  <TableCell sx={{ minWidth: '400px' }}>Transporte</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowsTransport.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>
                    <Checkbox
                        checked={!!selectedRowsTransport[index]} // Usar el estado de Transporte
                        onChange={() => handleCheckboxChangeTransport(index)} // Usar la función de cambio de Transporte
                      />
                    </TableCell>
                    <TableCell>{row.sucursal}</TableCell>
                    <TableCell>{row.transporte}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <div className="grid justify-end mt-5 w-full">
              <Button sx={{ width: '20rem', marginRight: '20px' }} variant="contained" endIcon={<AddCircleOutlineIcon />}>
                 Nuevo Transporte
              </Button>
          </div>
          </div>          
        )}
      </div>
    </>
  );
}
