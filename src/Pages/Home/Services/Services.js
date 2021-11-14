import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import { Container, Typography } from '@mui/material';


const services = [
    {
        name: 'Floride Treatment',
        description: 'Floride Treatment descriptions, this is an critical painfull deasise and uncomfortalbe sensesion for a patiient.',
        img: fluoride
    },
    {
        name: 'Floride Treatment',
        description: 'Floride Treatment descriptions, this is an critical painfull deasise and uncomfortalbe sensesion for a patiient.',
        img: fluoride
    },
    {
        name: 'Floride Treatment',
        description: 'Floride Treatment descriptions, this is an critical painfull deasise and uncomfortalbe sensesion for a patiient.',
        img: fluoride
    }
]

const Services = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Typography sx={{color: 'info.main'}} variant="h5" component="div" color="text.secondary" gutterBottom>
                      Our Services
                    </Typography>
                    <Typography sx={{ fontWeight: 600, pb:4 }} variant="h4" component="div" gutterBottom>
                    Services We Provide
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                      { services.map(service => <Service
                          key={service.name}
                          service= {service}></Service>
                        
                      )
                      }
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default Services;