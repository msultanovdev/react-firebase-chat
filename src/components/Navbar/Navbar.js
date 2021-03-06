import React, {useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';
import {useAuthState} from 'react-firebase-hooks/auth';
import { Context } from '../..';

const Navbar = () => {
  const {auth} = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {
                        user ?
                        user.displayName
                        : 'Messanger'
                    }
                </Typography>
                {   user ?

                    <Button onClick={() => auth.signOut()} color="inherit" variant="outlined">
                        Sign out
                    </Button>  
                    
                    :

                    <NavLink to={LOGIN_ROUTE} >
                        <Button color="inherit" variant="outlined">
                            Login
                        </Button>
                    </NavLink>
                    
                }
                </Toolbar>
            </AppBar>
        </Box>
    </div>
  )
}

export default Navbar;