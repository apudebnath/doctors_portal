import { Alert, AlertTitle, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import img from '../../../images/login.png'; 
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, loginUser, googleSignIn, authError, isLoading} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleFormSubmit = (e) => {
            e.preventDefault();
            loginUser(loginData.email, loginData.password, location, history);
    }

    const handleGoogleSignIn = () => {
        googleSignIn(location, history);
    }
    return (
        <Container>
            <h2>Login Please</h2>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid sx={{my: 1}} item xs={12} md={6}>
                        <Typography sx={{mt:8}} variant="body1" gutterBottom>Login</Typography>
                        <form onSubmit={handleFormSubmit} >
                            <TextField 
                                sx={{width: "75%", m: 1}}
                                id="standard-basic" 
                                label="Your Email"
                                type="email"
                                name="email"
                                onChange={handleOnChange} 
                                variant="standard" 
                            />
                            <TextField
                                sx={{width: "75%", m: 1}}
                                id="standard-basic" 
                                label="Your Password"
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                                variant="standard" 
                            />
                            <NavLink style={{textDecoration:'none', padding: '20px 0px'}} to="/register">
                                <Button 
                                    style={{fontWeight: '600', padding: '20px 0px'}} 
                                    variant="text"
                                    >New user? Please Register
                                </Button>
                            </NavLink>
                            <Button
                                sx={{width: "75%", m: 1}} 
                                variant="contained"
                                type="submit"
                                >Login
                            </Button>
                            {isLoading && <CircularProgress/>}
                            {user.email && <Alert severity="success">User Created Successfully.</Alert>}
                            {authError && <Alert severity="error">
                            <AlertTitle>Error</AlertTitle>
                            <strong>{authError}</strong>
                            </Alert>}
                        </form>
                        <p>-------------------O-------------------</p>
                        <Button
                            onClick={handleGoogleSignIn}
                            style={{fontWeight: '600', padding: '10px 20px'}} 
                            variant="contained"
                            >Google Login
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{width: '90%', image: 'fluid'}} src={img} alt="" />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Login;