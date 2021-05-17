import logo from './logo.svg';
import './App.css';

import {React, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

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
    padding: '.5rem',
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
}));

function App() {
  const classes = useStyles();

  const [userTextResponse, setuserTextResponse] = useState();

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
              Hi, I am Sam your Retail Virtual Agent. How can I help you today?
            </div>
            <TextField 
              id="standard-basic" 
              label="Your Response"
              className={classes.userTextInput}
              value={userTextResponse}
              onChange={(event) => {setuserTextResponse(event.target.value)}} />
          {/* </Grid> */}
        </form>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
