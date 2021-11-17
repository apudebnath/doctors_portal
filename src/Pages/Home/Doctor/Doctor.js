import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const Doctor = ({doctor}) => {
    const {name, email, image} = doctor;
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper sx={{py:5}}>
                    <img style={{height: '250px'}} src={`data:image/png;base64,${image}`} alt=""/>
                    <Typography variant="h6">{name}</Typography>
                    <Typography variant="p"><b>{email}</b></Typography>
                </Paper>
            </Grid>
        </>
    );
};

export default Doctor;