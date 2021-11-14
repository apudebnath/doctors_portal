import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import {fa-regular } from '@fortawesome/fontawesome/free-regular-svg-icons';
import { faClock,  } from '@fortawesome/free-solid-svg-icons'
import { Container, Typography } from '@mui/material';
const element = <FontAwesomeIcon icon={faClock} />;
//const clock = <FontAwesomeIcon icon="fa-regular fa-clock" />
//import {FaRegClock} from 'react-icons/fa';
const Info = () => {
    return (
        <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Box sx={{ width: '80%', alignItems: 'center', mt: -10, mb: 5 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                    <Grid item xs={12} sm={12} md={4}>
                        <Paper style={{backgroundColor: 'cyan', padding: '10px 5px'}}>
                            <Box style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <Grid item xs={4} sx={{fontSize: 40}} >
                                   {element}
                                </Grid>
                                <Grid item xs={8} sx={{textAlign: 'left'}}>
                                <Typography variant="p" sx={{fontSize: 18, fontWeight: 600}}  gutterBottom component="div">
                                   Opening Hours
                                </Typography>
                                <Typography variant="p" sx={{fontSize: 14}}  gutterBottom component="div">
                                At Dental, you’re family as soon as you walk into the office. We 24 hours for you.
                                </Typography>
                                </Grid>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Paper style={{backgroundColor: 'gray', padding: '10px 5px'}}>
                            <Box style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <Grid item xs={4} sx={{fontSize: 40}} >
                                   {element}
                                </Grid>
                                <Grid item xs={8} sx={{textAlign: 'left'}}>
                                <Typography variant="p" sx={{fontSize: 18, fontWeight: 600}}  gutterBottom component="div">
                                   Cavity Filling
                                </Typography>
                                <Typography variant="p" sx={{fontSize: 14}} gutterBottom component="div">
                                Straight teeth are easier to clean and offer fewer places for bacteria to hide.
                                </Typography>
                                </Grid>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Paper style={{backgroundColor: 'cyan',padding: '10px 5px'}}>
                            <Box style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <Grid item xs={4} sx={{fontSize: 40}} >
                                   {element}
                                </Grid>
                                <Grid item xs={8} sx={{textAlign: 'left'}}>
                                <Typography variant="p" sx={{fontSize: 18, fontWeight: 600}}  gutterBottom component="div">
                                   Teath Whitening
                                </Typography>
                                <Typography variant="p" sx={{fontSize: 14}} gutterBottom component="div">
                                The goal of teeth whitening is to transform dull or stained teeth into a beautiful.
                                </Typography>
                                </Grid>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                    
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                    
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Info;