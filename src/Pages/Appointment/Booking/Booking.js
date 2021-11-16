import { Button, Container, Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking, date, setBookingSuccess}) => {
    const { name, time, space, price} = booking;
    const [bookingOpen, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{py: 5}}>
                <Typography sx={{ color: 'info.main' }} variant="h5" gutterBottom component="div">
                    {name}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    {time}
                </Typography>
                <Typography variant="p" gutterBottom component="div" sx={{color: 'gray', fontSize: '18px', fontWeight: 'bold'}}>
                    Price: ${price}
                </Typography>
                <Typography variant="p" gutterBottom sx={{fontWeight:500, fontSize: '20', color: 'red'}} component="div">
                    {space} :available Space
                </Typography>
                <Button onClick={handleBookingOpen} style={{margin:'10px 0'}} variant="contained">Book Appointment</Button>
                </Paper>
            </Grid>
            <BookingModal
            date={date}
            booking={booking}
            handleBookingClose={handleBookingClose}
            bookingOpen={bookingOpen}
            setBookingSuccess={setBookingSuccess}
            >
            </BookingModal>
        </>           
    );
};

export default Booking;