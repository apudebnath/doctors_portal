import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import useAuth from '../../../Hooks/useAuth';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const BookingModal = ({bookingOpen, handleBookingClose, booking, date, setBookingSuccess}) => {  
    const {user} = useAuth();
    const {name, time, price} = booking;
    const initialInfo = {patientName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);
    
    const handleOnBlur = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newInfo = {...bookingInfo};
      newInfo[field] = value;
      setBookingInfo(newInfo)
      console.log(newInfo)
    }

    const handleBookingSubmit = e => {
      e.preventDefault();
      // Collect Data
      const appointment = {
         ...bookingInfo,
         time,
         price,
         serviceName: name,
         date: date.toLocaleDateString(),
      }
     console.log(appointment);
     // Send to the Server
     fetch('https://aqueous-woodland-69983.herokuapp.com/appointments', {
       method: 'POST',
       headers: {
         'content-type': 'application/json'
       },
       body: JSON.stringify(appointment)
     })
     .then(res => res.json())
     .then(data => {
      if(data.insertedId){
        setBookingSuccess(true);
        handleBookingClose();
      }
    })    
  }

    return (
        <Modal
        open={bookingOpen}
        onClose={handleBookingClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
              <form onSubmit={handleBookingSubmit}>
                <TextField
                  disabled
                  sx={{width: '100%',  m: 1}}
                  id="outlined-size-small"
                  defaultValue={time}
                  size="small"
                />
                <TextField
                  sx={{width: '100%',  m: 1}}
                  id="outlined-size-small"
                  name="price"
                  defaultValue={price}
                  size="small"
                />
                <TextField
                  sx={{width: '100%',  m: 1}}
                  id="outlined-size-small"
                  name="patientName"
                  onBlur={handleOnBlur}
                  defaultValue={user.displayName}
                  size="small"
                />
                <TextField
                  sx={{width: '100%',  m: 1}}
                  id="outlined-size-small"
                  name="email"
                  onBlur={handleOnBlur}
                  defaultValue={user.email}
                  size="small"
                />
                <TextField
                  sx={{width: '100%',  m: 1}}
                  id="outlined-size-small"
                  name="phone"
                  onBlur={handleOnBlur}
                  defaultValue="Your Phone Number"
                  size="small"
                />
                <TextField
                  disabled
                  sx={{width: '100%',  m: 1}}
                  id="outlined-size-small"
                  defaultValue={date.toDateString()}
                  size="small"
                />
                <Button type= "submit" style={{margin:'10px 0'}} variant="contained">
                  Book Appointment
                </Button>
            </form>
        </Box>
      </Modal>
    );
};

export default BookingModal;