import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Button, TextField, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

type RowData = {
  id: number;
  manifiesto: string;
  campo1?: string;
  campo2?: string;
};

export default function RecatView() {
  const location = useLocation();
  const { selectedRows = [] }: { selectedRows: RowData[] } = location.state || { selectedRows: [] };
  const [rows, setRows] = useState<RowData[]>(selectedRows);

  // Manejar el cambio de los valores en los TextFields
  const handleInputChange = (id: number, field: keyof RowData, value: string) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );
  };

  const deleteRow = (id: number) => {
    setRows((prevRows) =>
      prevRows.filter((row) => row.id !== id)
    );
  };

  return (
    <div className='py-3 m-10'>
      <Typography variant='h4' align='center'>Solicitar Recat</Typography>

      <TableContainer component={Paper} className='mt-10'>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: '1rem' }}>Número</TableCell>
              <TableCell sx={{ width: '1rem' }}>Manifiesto</TableCell>
              <TableCell>Sucursal Gonhermex</TableCell>
              <TableCell>N° serie manifiesto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.manifiesto}</TableCell>
                <TableCell>
                  <TextField
                    value={row.campo1 || ''}
                    onChange={(e) => handleInputChange(row.id, 'campo1', e.target.value)}
                    fullWidth
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={row.campo2 || ''}
                    onChange={(e) => handleInputChange(row.id, 'campo2', e.target.value)}
                    fullWidth
                  />
                </TableCell>
                <TableCell>
                  <IconButton
                    onClick={()=>deleteRow(row.id)}
                    >
                    <DeleteIcon/>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className='mt-5 w-full text-end grid justify-center'>
        <Button
          sx={{
            width: '15.5rem',
            borderRadius: '1rem',
            background: '#002D59',
            color: 'white',
          }}
          className='max-md:w-full'
          variant='outlined'
        >
          Enviar
        </Button>
      </div>
    </div>
  );
}
