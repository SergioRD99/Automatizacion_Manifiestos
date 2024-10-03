import ApplicationButtons from '../../components/AplicationButtons/ApplicationButtons';
import {Typography, Button, Fab, Tooltip } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { esES } from '@mui/x-data-grid/locales';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import { useHistorico } from './useHistorico';


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

  const{
      filter,setFilter,setRowSelect,exportExcel,filteredRows,isCheckboxEnabled,
       handleSendSelected
  } = useHistorico()
  
  return (
    <div className="py-5 m-5 lg:grid justify-center">
      <div className="mb-6">
        <Typography variant="h4" align="center">
          Histórico
        </Typography>
      </div>

      {/* Botones de filtro */}
      <div className="flex flex-col md:flex-row md:justify-center md:items-center mb-5">
        <Button
          sx={{ marginRight: '1rem', backgroundColor: filter === 'En bitácora' ? 'blue' : 'transparent', color: filter === 'En bitácora' ? 'white' : 'black' }}
          variant="outlined"
          onClick={() => setFilter('En bitácora')}
        >
          En Bitácora
        </Button>

        <Button
          sx={{ marginRight: '1rem', backgroundColor: filter === 'Incompleto' ? 'blue' : 'transparent', color: filter === 'Incompleto' ? 'white' : 'black' }}
          variant="outlined"
          onClick={() => setFilter('Incompleto')}
          className="ml-2"
        >
          Incompletos
        </Button>

        <Button
          sx={{ marginRight: '1rem', backgroundColor: filter === 'Pendiente Recat' ? 'blue' : 'transparent', color: filter === 'Pendiente Recat' ? 'white' : 'black' }}
          variant="outlined"
          onClick={() => setFilter('Pendiente Recat')}
          className="ml-2"
        >
          Pendientes de Recat
        </Button>

        <Button
          sx={{  marginRight: '1rem', backgroundColor: filter === '' ? 'blue' : 'transparent', color: filter === '' ? 'white' : 'black' }}
          variant="outlined"
          onClick={() => setFilter('')}
          className="ml-2"
        >
          Mostrar Todos
        </Button>
      </div>

      

      {/* DataGrid filtrado */}
      <div className="w-full overflow-x-auto">
        <DataGrid
          localeText={esES.components.MuiDataGrid.defaultProps.localeText}
          rows={filteredRows} // Filas filtradas
          columns={columns}
          autoHeight
          pagination
          paginationMode="client"
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 9,
              },
            },
          }} 
          onRowSelectionModelChange={(selection) => setRowSelect(selection)}         
          checkboxSelection={isCheckboxEnabled} 
          pageSizeOptions={[9]}
          disableRowSelectionOnClick
        />
      </div>
      {isCheckboxEnabled &&(
        <div className='text-end mb-4 mt-5'>
            <Button variant='contained' color='primary' onClick={handleSendSelected}>
              SIGUIENTE
            </Button>
        </div>
      )}

      <div>
        <Tooltip title='Exportar' arrow>
          <Fab
          color='info'
          variant='circular'
          aria-label='Add'
          sx={{ position:'absolute', right: 50 }}
          onClick={exportExcel}
          >
            <SimCardDownloadIcon/>
          </Fab>
        </Tooltip>
      </div>
    </div>
  );
}