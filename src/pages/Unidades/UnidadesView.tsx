import SwitchButton from "../../components/SwitchButton/switchButton";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Switch } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DialogUnidades from "../../components/ModalUnidades/DialogUnidades";
import { useUnidades } from "./useUnidades";

export default function UnidadesView() {
  
  const{
        rows,rowsTransport,isTogled,selectedRowsPlacas,selectedRowsTransport,dialogOpen,
        dialogType,handleOpenDialog,handleCloseDialog,handleTogle,
        handleCheckboxChangePlacas,handleCheckboxChangeTransport
  } = useUnidades()

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
