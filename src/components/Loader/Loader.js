import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './Loader.css';

const Loader = () => {
  return (
    <div>
        <Container>
            <Grid 
                style={{height: window.innerHeight - 50}}
                container 
                alignItems="center" 
                justifyContent="center"
            >
                <Grid
                    container
                    alignItems="center"
                    direction="column"
                    justifyContent="center"
                >
                    <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}

export default Loader;