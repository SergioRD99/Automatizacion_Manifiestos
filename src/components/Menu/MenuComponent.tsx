import { Menu } from '@mui/icons-material'
import { Box, Drawer, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import ciosa from '/src/assets/CiosaAutoTodo.png';
import PostAdd from "@mui/icons-material/PostAdd";
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import TagIcon from '@mui/icons-material/Tag';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function MenuComponent() {
    const [open, setOpen] = React.useState(false)

    const handleDrawerClose = () => {
      setOpen(false);
    };
  return (
    <>
    <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={() => setOpen(true)}>
      <Menu sx={{color:'white', fontSize:'2.0rem'}} className='ml-6'/>
    </IconButton>
    <Drawer
      anchor='left'
      open={open}
      onClose={() => setOpen(false)}
      sx={{ width: 300, '& .MuiDrawer-paper': { width: 300 } }}
    >
      <Box p={2} className='w-60 text-center' role='presentation'>
        <div className='flex flex-col'>
        <Typography variant='h6' component='div'>
            <img src={ciosa}/>
        </Typography>

        <IconButton onClick={handleDrawerClose}>
          <ArrowBackIcon/>
        </IconButton>
        </div>
     
        <List>
          <ListItem onClick={() => setOpen(false)}>
            <ListItemText>
              <Box display="flex" alignItems="center" gap={2}>
                <PostAdd style={{color:'#002D59'}} />
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit', fontSize:'1.2rem' }}>Manifiesto</Link>
              </Box>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpen(false)}>
            <ListItemText>
              <Box display="flex" alignItems="center" gap={2}>
                <ContentPasteSearchIcon style={{color:'#002D59'}} />
                <Link to="/historico" style={{ textDecoration: 'none', color: 'inherit', fontSize:'1.2rem' }}>Histórico</Link>
              </Box>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpen(false)}>
            <ListItemText>
              <Box display="flex" alignItems="center" gap={2}>
                <TagIcon style={{color:'#002D59'}} />
                <Link to="/recat" style={{ textDecoration: 'none', color: 'inherit', fontSize:'1.2rem' }}>Solicitar Recat</Link>
              </Box>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpen(false)}>
            <ListItemText>
              <Box display="flex" alignItems="center" gap={2}>
                <AirportShuttleIcon style={{color:'#002D59'}}/>
                <Link to="/unidades" style={{ textDecoration: 'none', color: 'inherit', fontSize:'1.2rem' }}>Unidades</Link>
              </Box>
            </ListItemText>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  </> 
  )
}
