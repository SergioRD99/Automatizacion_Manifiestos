import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { getData } from '../../services/apiServices';
import { useEffect, useState } from 'react';
import type { HistoricoTypes } from './HistoricoTypes';


export default function Historico() {
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        console.log(result)
  
      } catch (error: any) {
        console.log(error)
      } finally {
       
      }
    };
  
    fetchData();
  }, []);
  
  const [] = useState<HistoricoTypes[]>([])
  // Datos de ejemplo
  const rows: HistoricoTypes[] = [
    { numeroManifiesto: 1, manifiesto: 'Manifiesto A', status: 'En bitácora', bitacora: 'Bitácora 1' },
    { numeroManifiesto: 2, manifiesto: 'Manifiesto B', status: 'Incompleto', bitacora: 'Bitácora 2' },
    { numeroManifiesto: 3, manifiesto: 'Manifiesto C', status: 'Pendiente Recat', bitacora: 'Bitácora 7' },
    
  ];

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
                <TableCell>Acciones</TableCell>                
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.numeroManifiesto}>
                  <TableCell>{row.numeroManifiesto}</TableCell>
                  <TableCell>{row.manifiesto}</TableCell>
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
