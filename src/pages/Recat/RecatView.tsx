import { Button, TextField, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRecat } from './useRecat';

export default function RecatView() {

  const{
    rows, handleInputChange, deleteRow, handleSubmit
  } = useRecat()

  return (
    <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 max-w-full mx-auto mt-8"
    >
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
                    required
                    fullWidth
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={row.campo2 || ''}
                    onChange={(e) => handleInputChange(row.id, 'campo2', e.target.value)}
                    required
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
        type='submit'
          sx={{
            width: '15.5rem',
            borderRadius: '1rem',
            background: '#002D59',
            color: 'white',
          }}
          className='max-md:w-full'
          variant='outlined'
        >
          Solicitar Recat
        </Button>
      </div>
    </div>
    </form>
  );
}
