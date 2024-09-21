import React from 'react';
import { IconButton, Tooltip, Typography, Button } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams, GridRowSelectionModel } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import TagIcon from '@mui/icons-material/Tag';
import type { HistoricoTypes } from './HistoricoTypes';
import { esES } from '@mui/x-data-grid/locales';
import RecatView from '../Recat/RecatView';


const columns: GridColDef[] = [
  { field: 'numeroManifiesto', headerName: 'Número', width: 200 },
  { field: 'manifiesto', headerName: 'Manifiesto', width: 200 },
  { field: 'status', headerName: 'Status', width: 200 },
  { field: 'bitacora', headerName: 'Bitácora', width: 200 },
  {
    field: 'actions',
    headerName: 'Acciones',
    width: 200,
    renderCell: (params: GridRenderCellParams) => {
      const navigate = useNavigate();
      const [open, setOpen] = React.useState(false);

      const handleAction = (status: string) => {
        if (status === 'Incompleto') {
          navigate('/');
        } else if (status === 'Pendiente Recat') {
          setOpen(true);
        }
      };

      return (
        <>
          {params.row.status === 'En bitácora' && (
            <Tooltip title="Completado">
              <IconButton color="success">
                <p className="text-sm">Completo</p>
                <CheckCircleOutlineIcon />
              </IconButton>
            </Tooltip>
          )}

          {params.row.status === 'Incompleto' && (
            <Tooltip title="Ir al Formulario">
              <IconButton onClick={() => handleAction(params.row.status)} color="warning">
                <p className="text-sm">Incompleto</p>
                <PendingActionsIcon />
              </IconButton>
            </Tooltip>
          )}

          {params.row.status === 'Pendiente Recat' && (
            <>
              <Tooltip title="Solicitar Recat">
                <IconButton onClick={() => handleAction(params.row.status)} color="primary">
                  <p className="text-sm">Solicitar Recat</p>
                  <TagIcon />
                </IconButton>
              </Tooltip>
            </>
          )}
        </>
      );
    },
  },
];

// Vista
export default function Historico() {

  const [rows, setRows] = React.useState<HistoricoTypes[]>([]);
  const [filter, setFilter] = React.useState<string>(''); // Estado para el filtro
  const [rowsSelect, setRowsSelect] = React.useState<GridRowSelectionModel>([]);
  const navigate = useNavigate();

  const exampleRows: (HistoricoTypes & { id: number })[] = [
    { id: 1, numeroManifiesto: 1, manifiesto: 'Manifiesto A', status: 'En bitácora', bitacora: 'Bitácora 1' },
    { id: 2, numeroManifiesto: 2, manifiesto: 'Manifiesto B', status: 'Incompleto', bitacora: 'Bitácora 2' },
    { id: 3, numeroManifiesto: 3, manifiesto: 'Manifiesto C', status: 'Pendiente Recat', bitacora: 'Bitácora 5' },
  ];


  React.useEffect(() => {
    setRows(exampleRows);
  }, []);

  const filteredRows = rows.filter((row) => {
    if (!filter) return true;
    return row.status === filter;
  });

  const isCheckboxSelectionEnabled = filter === 'Pendiente Recat';


  const handleSendSelected = () => {
    const selectedRows = rows.filter((row) => rowsSelect.includes(row.numeroManifiesto));
    navigate('/recat', { state: { selectedRows } }); // Navegar con las filas seleccionadas
  };
  return (
    <div className="py-5 m-5 lg:grid justify-center">
      <div className="mb-6">
        <Typography variant="h4" align="center">
          Histórico
        </Typography>
      </div>

      {/* Botones de filtro */}
      <div className="mb-4 text-center">
        <Button variant="outlined" onClick={() => setFilter('En bitácora')}>
          En Bitácora
        </Button>
        <Button variant="outlined" onClick={() => setFilter('Incompleto')} className="ml-2">
          Incompletos
        </Button>
        <Button variant="outlined" onClick={() => setFilter('Pendiente Recat')} className="ml-2">
          Pendientes de Recat
        </Button>
        <Button variant="outlined" onClick={() => setFilter('')} className="ml-2">
          Mostrar Todos
        </Button>
      </div>

      {isCheckboxSelectionEnabled &&(
        <div className='text-center mb-4'>
            <Button variant='contained' color='primary' onClick={handleSendSelected}>
              Seleccionado
            </Button>
        </div>
      )}

      {/* DataGrid filtrado */}
      <div className="max-w-5xl">
        <DataGrid
          localeText={esES.components.MuiDataGrid.defaultProps.localeText}
          rows={filteredRows} // Filas filtradas
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
          checkboxSelection={isCheckboxSelectionEnabled} 
          pageSizeOptions={[9]}
          disableRowSelectionOnClick
        />
      </div>

    </div>
  );
}