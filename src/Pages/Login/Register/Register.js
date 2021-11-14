import { Alert, AlertTitle, Button, Container, TextField, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import img from '../../../images/login.png'; 
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';



const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const {registerUser, isLoading, authError, user} = useAuth();


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData)
    }

    const handleFormSubmit = (e) => {
        if(loginData.password !== loginData.password2){  
            alert('Your password did not match!!!')
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
            alert('Thank You For Register.')
            e.preventDefault();
    }
    return (
        <Container>
            <h2>Register Please</h2>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid sx={{my: 1}} item xs={12} md={6}>
                        <Typography sx={{mt:8}} variant="body1" gutterBottom>Register</Typography>
                        {!isLoading && <form onSubmit={handleFormSubmit} >
                            <TextField 
                                sx={{width: "75%", m: 1}}
                                id="standard-basic" 
                                label="Your Name"
                                type="text"
                                name="name"
                                onBlur={handleOnBlur} 
                                variant="standard" 
                            />
                            <TextField 
                                sx={{width: "75%", m: 1}}
                                id="standard-basic" 
                                label="Your Email"
                                type="email"
                                name="email"
                                onBlur={handleOnBlur} 
                                variant="standard" 
                            />
                            <TextField
                                sx={{width: "75%", m: 1}}
                                id="standard-basic" 
                                label="Your Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                variant="standard" 
                            />
                            <TextField
                                sx={{width: "75%", m: 1}}
                                id="standard-basic" 
                                label="ReEntery Your Password"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                variant="standard" 
                            />
                            <NavLink style={{textDecoration:'none', padding: '20px 0px' }} to="/login">
                                <Button 
                                    style={{fontWeight: '600', padding: '20px 0px'}}
                                    variant="text"
                                    >Already Register? Please Login
                                </Button>
                            </NavLink >
                            <Button
                                sx={{width: "75%", m: 1}}
                                variant="contained"
                                type="submit"
                                >Register
                            </Button>
                        </form>}
                        {isLoading && <CircularProgress/>}
                        {user.email && <Alert severity="success">User Created Successfully.</Alert>}
                        {authError && <Alert severity="error">
                            <AlertTitle>Error</AlertTitle>
                            <strong>{authError}</strong>
                        </Alert>}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{width: '90%', image: 'fluid'}} src={img} alt="" />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Register;