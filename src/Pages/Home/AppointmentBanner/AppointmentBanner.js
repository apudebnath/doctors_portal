import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bgAppoint from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${bgAppoint})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 170
}
const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                <Grid item xs={12} md={5}>
                    <img 
                        style={{width: 400, marginTop: -130}}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={10} md={7} sx={{display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center'}}>
                    <Box>
                        <Typography variant="h6" sx={{mb:3}} style={{color: 'cyan', fontSize: '26'}}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" sx={{my:1}} style={{color: 'lightcyan'}}>
                            Make an Appointment ToDay
                        </Typography>
                        <Typography variant="p" style={{color: 'lightblue'}}>
                            Make an Appointment ToDay Make an Appointment ToDay Make an Appointment     ToDay Make an Appointment ToDay
                        </Typography ><br />
                        <Button sx={{mt:3, bgcolor: '#5CE7ED' }} variant="contained">
                            Learn More
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;