import { Menu } from '@mui/icons-material'
import { Box, Drawer, IconButton, Typography } from '@mui/material'
import React from 'react'

export default function MenuComponent() {
    const [open, setOpen] = React.useState(false)

  return (
    <>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={()=>setOpen(true)}>
            <Menu/>
        </IconButton>
        <Drawer
        anchor='left'
        open={open}
        onClose={()=> setOpen(false)}
        >
            <Box  p={2} className='w-60 text-center' role='presentation'>
                <Typography variant='h6' component='div'>
                Ciosa AutoTodo
                </Typography>
            </Box>
        </Drawer>
    </>    
  )
}
