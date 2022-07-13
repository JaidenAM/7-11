import React from 'react';
//import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
//import { styled } from '@mui/material/styles';
import {Avatar, Button, Paper, TextField, Typography, Link, FormControlLabel, Checkbox} from '@mui/material';


const Login =()=>{

const paperStyle = {
      padding: "28px",
      height:  "70vh",
      width: "280",
      margin: "20 auto"
}

const avatarStyle ={
    backgroundColor: "green"
}

const textField ={
    margin: '10px'
}

const btnStyle ={
    margin: '8px 0'
}

return(
<Grid>
  <Paper elevation={10} style={paperStyle}>
    <Grid>
    <Avatar style={avatarStyle}> </Avatar>
    <h4>Sign In</h4>
    </Grid>

    <TextField
    label = 'Username'
    style={textField}
    placeholder='Enter Username'
    fullWidth
    required>
        </TextField>
    <TextField
    label = 'Password'
    style={textField}
    placeholder='Enter Password'
    fullWidth
    required>
        </TextField>

        <FormControlLabel
        control={
            <Checkbox
            Name='Checked'
            color='primary' 
            />}
            label = 'Remeber Me'
            />
            
            <Button
            type = "submit"
            color = "primary"
            variant="contained"
            style={btnStyle}
            fullWidth>
                </Button>
        <Typography
        style = {textField}>
            <Link href = '#'>
             Forgot Password?
            </Link>
        </Typography>
        
        <Typography
        style = {textField}>
            <Link href = '#'>
             Don't Have An Account Sign Up
            </Link>
        </Typography>

  </Paper>

</Grid>
)

}
export default Login;