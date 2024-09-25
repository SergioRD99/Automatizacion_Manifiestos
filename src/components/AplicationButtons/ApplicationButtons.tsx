import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import TagIcon from '@mui/icons-material/Tag';
import { useNavigate } from 'react-router-dom';

const ApplicationButtons = ({ status }: { status: string }) => {
  const navigate = useNavigate();
  const [, setOpen] = React.useState(false);

  const handleAction = (status: string) => {
    if (status === 'Incompleto') {
      navigate('/');
    } else if (status === 'Pendiente Recat') {
      setOpen(true);
    }
  };

  return (
    <>
      {status === 'En bitácora' && (
        <Tooltip title="En bitácora">
          <IconButton color="success">
            <p className="text-sm">En bitácora</p>
            <CheckCircleOutlineIcon />
          </IconButton>
        </Tooltip>
      )}

      {status === 'Incompleto' && (
        <Tooltip title="Ir al Formulario">
          <IconButton onClick={() => handleAction(status)} color="warning">
            <p className="text-sm">Incompleto</p>
            <PendingActionsIcon />
          </IconButton>
        </Tooltip>
      )}

      {status === 'Pendiente Recat' && (
        <Tooltip title="Solicitar Recat">
          <IconButton onClick={() => handleAction(status)} color="primary">
            <p className="text-sm">Solicitar Recat</p>
            <TagIcon />
          </IconButton>
        </Tooltip>
      )}
    </>
  );
};

export default ApplicationButtons;
