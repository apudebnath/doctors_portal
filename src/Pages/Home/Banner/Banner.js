import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Box } from '@mui/system';

const bannerbg = {
    background: `url(${bg})`
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400,

}
const Banner = () => {
    return (
        <div>
            <Container style={bannerbg} sx={{ width: '100%', my:3 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item style={{...verticalCenter, textAlign: 'left'}} xs={12} md={6}>
                        <Box>
                            <Typography variant='h4'>
                                Your New Smile <br /> Starts Here
                            </Typography>
                            <Typography variant='p'>
                                Your New Smile Starts Here Your New Smile Starts Here Your New Smile Starts Here Your New Smile Starts Here Your New Smile Starts Here
                            </Typography> <br />
                            <Button sx={{mt:3, bgcolor: '#5CE7ED' }} variant="contained">
                                GET APPOINTMENT
                            </Button>
                        </Box>
                    </Grid>
                    <Grid sx={{backgroundColor: 'lightcyan'}} item xs={12} md={6} style={verticalCenter}>
                        <img style={{width: 350,}} src={chair} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Banner;