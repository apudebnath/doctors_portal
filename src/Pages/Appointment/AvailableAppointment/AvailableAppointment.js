import { Alert, Container, Grid, Typography } from '@mui/material';
import {useState} from 'react';
import React from 'react';
import Booking from '../Booking/Booking';


const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodontics',
        time: '08.00 AM - 09.00PM',
        price: 15,
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetic Orthodontics',
        time: '10.00 AM - 05.00PM',
        price: 12,
        space: 6
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '09.00 AM - 01.00PM',
        price: 11,
        space: 8
    },
    {
        id: 4,
        name: 'Pediatric Oral',
        time: '08.00 AM - 09.00PM',
        price: 18,
        space: 5
    },
    {
        id: 5,
        name: 'Oral Surgery',
        time: '11.00 AM - 03.00PM',
        price: 12,
        space: 4
    },
    {
        id: 6,
        name: 'Dental Surgery',
        time: '06.00 PM - 09.00PM',
        price: 19,
        space: 7
    }
]

const AvailableAppointment = ({date}) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography sx={{ color: 'info.main', py:4 }} variant= "h4">Available Appointments {date.toDateString()}</Typography>
            { bookingSuccess && <Alert severity="success"> Appointment Booking Successful !!!</Alert>}
            <Grid container spacing={3}>
                    {
                        bookings.map(booking => <Booking
                        key={booking.id}
                        date={date}
                        booking={booking}
                        setBookingSuccess={setBookingSuccess}
                        ></Booking>)
                    }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;