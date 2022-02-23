import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const RegistrationComponent = ({ handleClose }) => {
//   const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
    handleClose();
  };

  return (
    <form  onSubmit={handleSubmit}>
        <TextField
         fullWidth
         sx={{
             mb: 5,
           }}
        label="First Name"
        variant="outlined"
        required
        value={firstName}
        onChange={e => setFirstName(e.target.value)}

      />
      <br />
      <TextField
       fullWidth
       sx={{
           mb: 5,
         }}
        label="Last Name"
        variant="outlined"
        required
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <br />
      <TextField
       fullWidth
       sx={{
           mb: 5,
         }}
        label="Email"
        variant="outlined"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <br />
      <TextField
                fullWidth
                sx={{
                    mb: 5,
                  }}
        label="Password"
        variant="outlined"
        type="password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
        
      />
      <br/>
      <div>
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          sx={{ backgroundColor: "#242424" }}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default RegistrationComponent;