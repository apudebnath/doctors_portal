import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import image from '../../../images/treatment.png';
import { Button, Container, Typography } from '@mui/material';
const Treatment = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1, my: 5, }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6}>
                        <img 
                        style={{width:'70%', objectFit: 'cover'}}
                        src={image} alt="" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} sx={{display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center'}}>
                        <Box>
                        <Typography variant="h4" gutterBottom component="div">
                            Exceptional Dental Care, on your terms
                        </Typography>
                        <Typography sx={{my:5}} variant="p" gutterBottom component="div">
                            Our mission is to deliver exceptional dental care to our patients and create meaningful relationships worth sharing. We’re a dental practice with an emphasis on patient education and we provide a wide array of cosmetic general and emergency dental services.
                        </Typography>
                        <Button sx={{mt:3, bgcolor: '#5CE7ED' }} variant="contained">Learn More</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Treatment;