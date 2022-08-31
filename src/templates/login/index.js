import React from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Checkbox from '@mui/material/Checkbox';
const LoginTemplate = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const btnstyle={margin:'8px 0'}
    const marginTop = { marginTop: 5 }
    
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                   
                    <h2>Login</h2>
                </Grid>
                <TextField style = {marginTop} label='Username' placeholder='Enter username' fullWidth required />
                <TextField  style = {marginTop} label='Password' placeholder='Enter password' type='password' fullWidth required margin='de'/>
                <FormControlLabel
                    style = {marginTop}
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle,marginTop} fullWidth >Login</Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > 
                     <Link href="#" color="primary" variant="contained" style={btnstyle, marginTop}>
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default LoginTemplate;