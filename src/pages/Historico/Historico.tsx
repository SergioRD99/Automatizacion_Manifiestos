import React from 'react';
import { IconButton, Tooltip, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import type { HistoricoTypes } from './HistoricoTypes';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import TagIcon from '@mui/icons-material/Tag';

// Define las columnas para el DataGrid
const columns: GridColDef[] = [
  { field: 'numeroManifiesto', headerName: 'Número de Manifiesto', width: 150 },
  { field: 'manifiesto', headerName: 'Manifiesto', width: 200 },
  { field: 'status', headerName: 'Status', width: 200 },
  { field: 'bitacora', headerName: 'Bitácora', width: 200 },
  {
    field: 'actions',
    headerName: 'Acciones',
    width: 200,
   
    renderCell: (params: GridRenderCellParams) => {
      const navigate = useNavigate();

      const handleAction = (status: string) => {
        if (status === 'Incompleto') {
          navigate('/');
        } else if (status === 'Pendiente Recat') {
          navigate('/recat');
        } 
      };

      if(params.row.status === 'En bitacora'){
        return null;
      }

      return (
        <>
        {params.row.status === 'En bitácora' && (
            <Tooltip title="Completado">
              <IconButton color='success'>
                <p className='text-sm'>completo</p>  
                <CheckCircleOutlineIcon/>
              </IconButton>
            </Tooltip>
          )}

          {params.row.status === 'Incompleto' && (
            <Tooltip title="Ir al Formulario">
              <IconButton onClick={() => handleAction(params.row.status)} color="warning">    
              <p className='text-sm'>Incompleto</p>    
                <PendingActionsIcon/>
              </IconButton> 
            </Tooltip>
          )}

          {params.row.status === 'Pendiente Recat' && (
            <Tooltip title="Solicitar Recat">
              <IconButton onClick={() => handleAction(params.row.status)} color="primary">    
              <p className='text-sm'>solicitar recat</p>  
                <TagIcon/>           
              </IconButton>
            </Tooltip>
          )}
        </>
      );
    },
  },
];

export default function Historico() {
  const [rows, setRows] = React.useState<HistoricoTypes[]>([]);

  const exampleRows: (HistoricoTypes & { id: number })[] = [
    { id: 1, numeroManifiesto: 1, manifiesto: 'Manifiesto A', status: 'En bitácora', bitacora: 'Bitácora 1' },
    { id: 2, numeroManifiesto: 2, manifiesto: 'Manifiesto B', status: 'Incompleto', bitacora: 'Bitácora 2' },
    { id: 3, numeroManifiesto: 3, manifiesto: 'Manifiesto C', status: 'Pendiente Recat', bitacora: 'Bitácora 7' },
    { id: 4, numeroManifiesto: 1, manifiesto: 'Manifiesto A', status: 'En bitácora', bitacora: 'Bitácora 1' },
    { id: 5, numeroManifiesto: 2, manifiesto: 'Manifiesto B', status: 'Incompleto', bitacora: 'Bitácora 2' },
    { id: 6, numeroManifiesto: 3, manifiesto: 'Manifiesto C', status: 'Pendiente Recat', bitacora: 'Bitácora 7' },
    { id: 7, numeroManifiesto: 1, manifiesto: 'Manifiesto A', status: 'En bitácora', bitacora: 'Bitácora 1' },
    { id: 8, numeroManifiesto: 2, manifiesto: 'Manifiesto B', status: 'Incompleto', bitacora: 'Bitácora 2' },
    { id: 9, numeroManifiesto: 3, manifiesto: 'Manifiesto C', status: 'Pendiente Recat', bitacora: 'Bitácora 7' },
  ];

  React.useEffect(() => {
    setRows(exampleRows);
  }, []);

  return (
    <div className="py-5 m-5 lg:grid justify-center">
      <div className="mb-6">
        <Typography variant="h4" align="center">
          Histórico
        </Typography>
      </div>     
        <div className='max-w-5xl'>
          <DataGrid
            
            rows={rows}
            columns={columns}
            pagination
            paginationMode="client"
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 9,
                },
              },
            }}
            pageSizeOptions={[9]}
            disableRowSelectionOnClick           
          />
        </div>

    </div>
  );
}
