import { useState } from "react";
import SwitchButton from "../../components/SwitchButton/switchButton";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox } from '@mui/material';

const rows = [
  { sucursal: 'Sucursal 1', placa: 'ABC1234' },
  { sucursal: 'Sucursal 2', placa: 'XYZ5678' },
  { sucursal: 'Sucursal 3', placa: 'DEF91011' },
];

export default function UnidadesView() {
  const [isTogled, setTogled] = useState(false);
  const [selectedRows, setSelectedRows] = useState<{ [key: number]: boolean }>({});

  const handleTogle = () => {
    setTogled((prevState) => !prevState);
  };

  const handleCheckboxChange = (index: number) => {
    setSelectedRows((prevSelectedRows) => ({
      ...prevSelectedRows,
      [index]: !prevSelectedRows[index],
    }));
  };

  return (
    <>
      <div className="grid justify-center">
        <SwitchButton
          isTogled={isTogled}
          handleTogle={handleTogle}
          label={isTogled ? 'Placas' : 'Transportes'}
        />
        
        <h2>{isTogled ? 'Placas' : 'Transportes'}</h2>

        {isTogled ? (
          <TableContainer component={Paper} sx={{ width: '100%', margin: 'auto' }}>
            <Table aria-label="Placas table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ width: '100%' }}>Select</TableCell>
                  <TableCell sx={{ width: '100%' }}>Sucursal</TableCell>
                  <TableCell sx={{ width: '100%' }}>Placa</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Checkbox
                        checked={!!selectedRows[index]}
                        onChange={() => handleCheckboxChange(index)}
                      />
                    </TableCell>
                    <TableCell>{row.sucursal}</TableCell>
                    <TableCell>{row.placa}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <div>
            <TableContainer component={Paper} sx={{ width: '100%', margin: 'auto' }}>
            <Table aria-label="Placas table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ width: '100%' }}>Select</TableCell>
                  <TableCell sx={{ width: '100%' }}>Sucursal</TableCell>
                  <TableCell sx={{ width: '100%' }}>Placa</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Checkbox
                        checked={!!selectedRows[index]}
                        onChange={() => handleCheckboxChange(index)}
                      />
                    </TableCell>
                    <TableCell>{row.sucursal}</TableCell>
                    <TableCell>{row.placa}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </div>
        )}
      </div>
    </>
  );
}
