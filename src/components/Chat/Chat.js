import React, {useContext, useState} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import { Context } from '../..';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Loader from '../Loader/Loader';
import firebase from 'firebase/compat/app';
import Avatar from '@mui/material/Avatar';

const Chat = () => {
  const {auth, firestore} = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState('');
  const [messages, loading] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt')
  )

  const sendMessage = async () => {
    firestore.collection('messages').add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setValue('');
  }

  if(loading) {
    return <Loader />
  }

  return (
    <Container>
        <Grid 
          style={{height: window.innerHeight - 50}}
          container 
          justifyContent="center"
          alignItems="center"
        >
          <div style={{width: '80%', height: '60vh', border: '1px solid #1976D2', overflowY: 'auto'}}>
            {messages.map(message => 
              <div style={{
                margin: 10,
                border: user.uid === message.uid ? '1px solid lightgray' : '1px solid green',
                marginLeft: user.uid === message.uid ? 'auto' : '10px',
                width: 'fit-content',
                padding: 5
              }}>
                <Grid container alignItems="center" >
                  <Avatar sizes='ms' src={message.photoURL} style={{marginRight: 5}} />
                  <div>{message.displayName}</div>
                </Grid>
                <div>
                  {message.text}
                </div>
              </div>
            )}
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
              <Button onClick={sendMessage}>
                Send
              </Button>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Chat;