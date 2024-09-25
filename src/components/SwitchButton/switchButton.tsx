import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#003892', // Azul oscuro para el fondo del switch cuando está activado
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#003892', // Azul oscuro para el "thumb"
    width: 32,
    height: 32,
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be', // Color gris claro cuando está desactivado
    borderRadius: 20 / 2,
  },
}));

type actionProps = {
  isTogled: boolean;
  handleTogle: () => void;
  label: string;
};

export default function SwitchButton({ isTogled, handleTogle }: actionProps) {
  return (
    <FormGroup>
      <FormControlLabel      
        control={
          <MaterialUISwitch 
            sx={{ m: 1 }} 
            checked={isTogled} 
            onChange={handleTogle} 
          />
        }
        label="Placas - Transportes"
        labelPlacement="top"
      />
    </FormGroup>
  );
}
