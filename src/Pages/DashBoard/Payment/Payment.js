import { Container, Grid, Typography } from '@mui/material';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51Jw0xfGGbqsqkoSQVH4sxq3kjkm9A0ZpLcx4WCGcSKNvL2gXpntIvpHAesVo6M3vaXEDkatKTVVexlsSHAKCYsoq00ws2bTwOu')

const Payment = () => {
    const {appointmentId} = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`https://aqueous-woodland-69983.herokuapp.com/appointments/${appointmentId}`)
        .then(res => res.json())
        .then(data => {
            setAppointment(data);
        })
    }, [appointmentId])
    return (
        <Container>
            <Grid container spacing={2} sx={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
                <Grid item xs={6} sx={{textAlign: 'left'}}>
                    <Typography> Pay for id: {appointment._id}</Typography>
                    <Typography> Patient Name: {appointment.patientName}</Typography>
                    <Typography> Service Name: {appointment.serviceName}</Typography>
                    <Typography> Service Price: {appointment.price}</Typography>
                </Grid>
            </Grid>
            <Grid>
                <Grid>
                    {appointment?.price &&<Elements stripe={stripePromise}>
                       <CheckoutForm 
                       appointment = {appointment} />
                    </Elements>}
                </Grid>
            </Grid>
        </Container>
    );
};

export default Payment;

/* 
1. install stripe and strip-react
2. Set publishable key
3. Elements
4. Checkout Form
-------------
5. Create payment method;
*/