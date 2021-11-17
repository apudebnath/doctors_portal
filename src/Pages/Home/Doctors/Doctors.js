import { Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://aqueous-woodland-69983.herokuapp.com/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            <Container sx={{my: 8}}>
                <Typography variant="h4" sx={{py:8}}>Doctors:{doctors.length}</Typography>
                <Grid container spacing={5}>
                    {
                        doctors.map(doctor => <Doctor
                        key={doctor._id}
                        doctor={doctor}
                        />)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Doctors;