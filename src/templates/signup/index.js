import React from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
const SignupTemplate = () => {
        const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
        const headerStyle = { margin: 0 }
        const avatarStyle = { backgroundColor: '#1bbd7e' }
        const marginTop = { marginTop: 5 }
        return (
            <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                        <h2 style={headerStyle}>Sign Up</h2>
                        <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                    </Grid>
                    <form>
                        <TextField style= {marginTop}  fullWidth label='Name' placeholder="Enter your name" />
                        <TextField  style= {marginTop} fullWidth label='Email' placeholder="Enter your email" />
                        <FormControl component="fieldset" style={marginTop}>
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </FormControl>
                        <TextField  style= {marginTop} fullWidth label='Phone Number' placeholder="Enter your phone number" />
                        <TextField   style= {marginTop} fullWidth label='Password' placeholder="Enter your password"/>
                        <TextField  style= {marginTop} fullWidth label='Confirm Password' placeholder="Confirm your password"/>
                        <FormControlLabel
                            control={<Checkbox name="checkedA" />}
                            label="I accept the terms and conditions."
                        />
                        <Button  style= {marginTop} type='submit' variant='contained' color='primary'>Sign up</Button>
                    </form>
                </Paper>
            </Grid>
    )
}

export default SignupTemplate;