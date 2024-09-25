import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ }) => ({
  borderRadius: 20,
  border: '1px solid #003892',
  overflow: 'hidden',
}));

const StyledToggleButton = styled(ToggleButton)(({ }) => ({
  fontWeight: 'bold',
  fontSize: '14px',
  padding: '8px 16px',
  color: '#003892',
  transition: 'background-color 0.3s ease, color 0.3s ease, transform 0.3s ease',
  '&.Mui-selected': {
    backgroundColor: '#003892',
    color: '#fff',
    transform: 'scale(1.05)',
    '&:hover': {
      backgroundColor: '#002766',
    },
  },
  '&:not(.Mui-selected)': {
    backgroundColor: '#f0f0f0',
    color: '#003892',
    '&:hover': {
      backgroundColor: '#d9d9d9',
    },
  },
}));

type ActionProps = {
  isTogled: boolean;
  handleTogle: () => void;
};

export default function ToggleButtonComponent({ isTogled, handleTogle }: ActionProps) {
  const selectedValue = isTogled ? 'placas' : 'transportes';

  const handleToggle = (_event: React.MouseEvent<HTMLElement>, newSelected: string) => {
    if (newSelected !== null) {
      handleTogle();
    }
  };

  return (
    <StyledToggleButtonGroup
      value={selectedValue}
      exclusive
      onChange={handleToggle}
      aria-label="Toggle between Transportes and Placas"
    >
      <StyledToggleButton value="transportes" aria-label="Transportes">
        Transportes
      </StyledToggleButton>
      <StyledToggleButton value="placas" aria-label="Placas">
        Placas
      </StyledToggleButton>
    </StyledToggleButtonGroup>
  );
}
