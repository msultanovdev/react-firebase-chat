import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Login = () => {
  return (
    <Container>
        <Grid 
            style={{height: window.innerHeight - 50}}
            container 
            alignItems="center" 
            justifyContent="center"
        >
            <Grid
                style={{width: 400, background: 'rgba(0, 0, 0, 0.07)'}}
                container
                alignItems="center"
                direction="colimn"
                justifyContent="center"
            >
                <Box p={5}>
                    <Button variant="outlined">Log in with google</Button>
                </Box>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Login;