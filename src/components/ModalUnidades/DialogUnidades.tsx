import { Button, TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';



type dialogProps = {
  open: boolean;
  title: string;
  nameTexfield: string;
  nameTextField2: string;
  onClose: () => void;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function DialogUnidades({ open, title, nameTexfield, nameTextField2, onClose }: dialogProps) {

  return (
    <>
        <Dialog
            open={open}
            TransitionComponent={Transition}        
            keepMounted
            onClose={onClose}
            aria-describedby={title}
            sx={{
            '& .MuiDialog-paper': {
                width: '500px',
                maxWidth: '600px',
                borderRadius:'1rem'            
            },
            }}
        >
            <form>
                <h1 className='text-center font-bold'>{title}</h1>

                <div className=' flex flex-col m-10 gap-10'>
                    <TextField variant="outlined" label={nameTexfield} fullWidth required />
                    <TextField variant="outlined" label={nameTextField2} fullWidth required />
                </div>
                <div className='flex mb-2 justify-center gap-4'>
                    <Button type='submit' color='primary' variant='outlined'>Agregar</Button>
                    <Button onClick={onClose} color='primary' variant='outlined'>Cancelar</Button>
                </div>
            </form>
        </Dialog>
    </>
  );
}
