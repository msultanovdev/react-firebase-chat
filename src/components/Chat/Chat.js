import React, {useContext, useState} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import { Context } from '../..';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Chat = () => {
  const {auth, firestore} = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState('');

  return (
    <Container>
        <Grid 
          style={{height: window.innerHeight - 50}}
          container 
          justifyContent="center"
          alignItems="center"
        >
          <div style={{width: '80%', height: '60vh', border: '1px solid #1976D2', overflowY: 'auto'}}>
            
          </div>
          <Grid
              container
              direction="column"
              alignItems="flex-end"
              style={{width: '80%'}}
            >
              <TextField 
                value={value}
                onChange={e => setValue(e.target.value)}
                id="standard-basic" 
                label="Send a message" 
                variant="standard" 
                fullWidth
                rows={2}
              />
              <Button>
                Send
              </Button>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Chat;