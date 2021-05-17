import logo from './logo.svg';
import './App.css';

import {React, useState} from 'react';
import clsx from 'clsx';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '1rem'
  },
  chatBox: {
    height: '70vh'
  },
  form: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    padding: '.5rem',
    height: '10%',
    backgroundColor: '#000',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: 'bold'
  },
  chats: {
    padding: '1rem',
    backgroundColor: '#eee',
    height: '80%'
  },
  userTextInput: {
    padding: '.5rem',
    height: '10%',
    fontSize: '100%'
  },
  paper: {
    height: '100%',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    // width: '25ch',
  },
  userChat: {
    padding: '.5rem',
    borderRadius: '.3rem',
    backgroundColor: '#fff',
    textAlign: 'right',
    marginBottom: '.5rem'
  },
  agentChat: {
    padding: '.5rem',
    borderRadius: '.3rem',
    backgroundColor: 'rgba(0,256,0,.8)',
    textAlign: 'left',
    marginBottom: '.5rem'
  }
}));


function App() {
  const classes = useStyles();

  const [userTextResponse, setuserTextResponse] = useState();
  const [chats, setChats] = useState(["Hi, I am Sam your Retail Virtual Agent. How can I help you today?", "asf"]);
  
  const handleUserResponse = () => {
    
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "true",
      }
    };

    axios.post(
      'https://1d2698554102.ngrok.io/query', 
      {
        userTextResponse: userTextResponse
      },
      axiosConfig
      )
      .then((response) => {

      })
      .catch((err) => {

      })

    setChats([
      ...chats,
      userTextResponse
    ])
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={10} className={classes.chatBox}>
        <form className={`${classes.root} ${classes.form}`} noValidate autoComplete="off">
          {/* <Grid item xs={12}> */}
            <header className={classes.header}>
              Retail Agent
            </header>
            <div className={classes.chats}>
              {
                chats.length != 0
                ?
                chats.map((chat, i) => {
                  if ((i % 2) != 0)
                    return <div style={{textAlign: 'right', marginBottom: '2rem'}}><span className={classes.userChat}>{chat}</span></div>
                  else 
                    return <div><span className={classes.agentChat}>{chat}</span></div>
                })
                :
                ''
              }
            </div>
            <FormControl 
              className={clsx(classes.margin, classes.textField, classes.userTextInput)}>
              <InputLabel htmlFor="standard-adornment-password">Your Response</InputLabel>
              <Input
                id="standard-adornment-password"
                type='text'
                value={userTextResponse}
                onChange={(event) => {setuserTextResponse(event.target.value)}}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Send"
                      onClick={handleUserResponse}
                    >
                      <SendRoundedIcon></SendRoundedIcon>
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            {/* <TextField 
              id="standard-basic" 
              label="Your Response"
              className={classes.userTextInput}
              value={userTextResponse}
              onChange={(event) => {setuserTextResponse(event.target.value)}} /> */}
          {/* </Grid> */}
        </form>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
