import React, { useMemo } from 'react';
import ApplicationButtons from '../../components/AplicationButtons/ApplicationButtons';
import {Typography, Button } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams, GridRowSelectionModel } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import type { HistoricoTypes } from './HistoricoTypes';
import { esES } from '@mui/x-data-grid/locales';



const columns: GridColDef[] = [
  { field: 'numeroManifiesto', headerName: 'Número', width: 300 },
  { field: 'manifiesto', headerName: 'Manifiesto', width: 300 },
  { field: 'status', headerName: 'Estatus', width: 300 },
  { field: 'bitacora', headerName: 'Bitácora', width: 300 },
  {
    field: 'actions',
    headerName: 'Acciones',
    width: 200,
    renderCell: (params: GridRenderCellParams) => (
      <ApplicationButtons status={params.row.status} />
    ),
  },
];

// Vista
export default function Historico() {

  const [rows, setRows] = React.useState<HistoricoTypes[]>([]);
  const [filter, setFilter] = React.useState<string>(''); // Estado para el filtro
  const [rowsSelect, setRowsSelect] = React.useState<GridRowSelectionModel>([]); 
  const navigate = useNavigate();

  const exampleRows: (HistoricoTypes & {})[] = [
    { id: 1, numeroManifiesto: 1, manifiesto: 'Manifiesto ', status: 'En bitácora', bitacora: 'Bitácora 1' },
    { id: 2, numeroManifiesto: 2, manifiesto: 'Manifiesto ', status: 'Incompleto', bitacora: 'Bitácora 2' },
    { id: 3, numeroManifiesto: 3, manifiesto: 'Manifiesto ', status: 'Pendiente Recat', bitacora: 'Bitácora ' },
    { id: 4, numeroManifiesto: 4, manifiesto: 'Manifiesto ', status: 'En bitácora', bitacora: 'Bitácora 1' },
    { id: 5, numeroManifiesto: 5, manifiesto: 'Manifiesto ', status: 'Incompleto', bitacora: 'Bitácora 2' },
    { id: 6, numeroManifiesto: 6, manifiesto: 'Manifiesto ', status: 'Pendiente Recat', bitacora: 'Bitácora 4' },
    { id: 7, numeroManifiesto: 7, manifiesto: 'Manifiesto ', status: 'En bitácora', bitacora: 'Bitácora 1' },
    { id: 8, numeroManifiesto: 8, manifiesto: 'Manifiesto ', status: 'Incompleto', bitacora: 'Bitácora 2' },
    { id: 9, numeroManifiesto: 9, manifiesto: 'Manifiesto ', status: 'Pendiente Recat', bitacora: 'Bitácora 3' },
    { id: 10, numeroManifiesto:10, manifiesto: 'Manifiesto ', status: 'En bitácora', bitacora: 'Bitácora 1' },
    { id: 11, numeroManifiesto:11, manifiesto: 'Manifiesto ', status: 'Incompleto', bitacora: 'Bitácora 2' },
    { id: 12, numeroManifiesto:12, manifiesto: 'Manifiesto ', status: 'Pendiente Recat', bitacora: 'Bitácora ' },
    { id: 13, numeroManifiesto:13, manifiesto: 'Manifiesto ', status: 'En bitácora', bitacora: 'Bitácora 1' },
    { id: 14, numeroManifiesto:14, manifiesto: 'Manifiesto ', status: 'Incompleto', bitacora: 'Bitácora 2' },
    { id: 15, numeroManifiesto:15, manifiesto: 'Manifiesto ', status: 'Pendiente Recat', bitacora: 'Bitácora 4' },
    { id: 16, numeroManifiesto:16, manifiesto: 'Manifiesto ', status: 'En bitácora', bitacora: 'Bitácora 1' },
    { id: 17, numeroManifiesto:17, manifiesto: 'Manifiesto ', status: 'Incompleto', bitacora: 'Bitácora 2' },
    { id: 18, numeroManifiesto:18, manifiesto: 'Manifiesto ', status: 'Pendiente Recat', bitacora: 'Bitácora 3' },
  ];


  React.useEffect(() => {
    setRows(exampleRows);
  }, []);

  const filteredRows = useMemo(() => {
    return rows.filter((row) => {
      if (!filter) return true;
      return row.status === filter;
    });
  }, [rows, filter]);
  

  const isCheckboxSelectionEnabled = filter === 'Pendiente Recat';


  const handleSendSelected = () => {
    const selectedRows = rows.filter((row) => rowsSelect.includes(row.id));
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

      

      {/* DataGrid filtrado */}
      <div className="w-full">
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
          onRowSelectionModelChange={(selection) => setRowsSelect(selection)}         
          checkboxSelection={isCheckboxSelectionEnabled} 
          pageSizeOptions={[9]}
          disableRowSelectionOnClick
        />
      </div>
      {isCheckboxSelectionEnabled &&(
        <div className='text-end mb-4 mt-5'>
            <Button variant='contained' color='primary' onClick={handleSendSelected}>
              SIGUIENTE
            </Button>
        </div>
      )}
    </div>
  );
}