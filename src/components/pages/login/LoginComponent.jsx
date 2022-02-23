import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';
import { Link } from "react-router-dom";


const LoginComponent = ({ handleClose }) => {
//   const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    console.log(e);
  };

  return (
      
    <form  onSubmit={handleSubmit}>
        <TextField 
        id="outlined-basic"
        variant="outlined"
        label="User Name"
        required
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        style={{display: 'flex',margin:'10px'}}
         />
      <br />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{display: 'flex',margin:'10px'}}
      />
      <br />
      <div style={{display: 'flex', justifyContent: 'center'}}>
          <span style={{display: 'flex'}}>
          <Button type="submit" variant="contained" color="success" style={{display: 'flex',margin:'10px'}}>
          Sign In
        </Button>
        <span style={{display: 'flex', paddingTop: '15px'}}>
            Don't have an account?
            <Link to="/registration">Sign up</Link>
        </span>
          </span>

      </div>
      
    </form>
  );
};

export default LoginComponent;