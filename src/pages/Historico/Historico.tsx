import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

function createData(
  numero: number,
  name: string,
  status: string,
  bitacora: string,

) {
  return { numero,name, status, bitacora };
}

// Datos de ejemplo
const rows = [
  createData(1, 'Manifiesto', 'En bitácora', 'Bitácora 1'),
  createData(2, 'Manifiesto', 'Incompleto', 'Bitácora 2'),
  createData(3, 'Manifiesto', 'Pendiente Recat', 'Bitácora 7'),
];
export default function Historico() {
  return (
    <>
      <div className='py-5'>
       <div className='mb-6'>
       <Typography variant="h4" className="text-center">
            Historico
        </Typography>
       </div>
       
        <div className='m-7'>
        <TableContainer component={Paper} elevation={0}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Número</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Bitácora</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.numero}>
                  <TableCell>{row.numero}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.bitacora}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </TableContainer>
        </div>
      </div>
    </>
  )
}
