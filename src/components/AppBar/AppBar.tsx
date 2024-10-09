import MenuComponent from "../Menu/MenuComponent"
import ciosa from '/src/assets/Ciosa_AutoTodo.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button, IconButton, Menu, MenuItem} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";



export default function AppBar() {

  const [anchor, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchor);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => { 
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <header className="py-5 flex items-center gap-5" style={{backgroundColor:'#002D59'}}>
        <MenuComponent/>    
        <img src={ciosa} className="max-w-40 h-auto"/>   
        <div className="ml-auto flex gap-4 mr-20">
        
          <div className="hidden md:flex gap-4">
              <Button className="flex-col" style={{color:'white', fontSize:'0.7rem'}}>
                <Link to="/login" style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center' }}>
                  <AccountCircleIcon />
                  <h1 style={{ margin: 0 }}>Iniciar sesión</h1>
                </Link>
              </Button>
              <Button className="flex-col" style={{color:'white', fontSize:'0.7rem'}}>
                  <LogoutIcon/>                  
                  <h1>Salir</h1>      
              </Button>
          </div>       
          <div className="flex md:hidden">
          
            <IconButton
              style={{ color: 'white' }}
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <AccountCircleIcon sx={{ width: 28, height: 28 }} />
            </IconButton>
            <Menu
              anchorEl={anchor}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 24,  // Ajuste del tamaño de avatar
                      height: 24,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&::before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={handleClose} className="gap-2">
              <AccountCircleIcon sx={{ width: 20, height: 20 }}/>
                Iniciar Sesion
              </MenuItem>
              <MenuItem onClick={handleClose} className="gap-2">
                <LogoutIcon sx={{ width: 20, height: 20 }}/>
                Salir
              </MenuItem>
            </Menu>
          </div>                                                      
        </div>
      </header>
    </>
  )
}
