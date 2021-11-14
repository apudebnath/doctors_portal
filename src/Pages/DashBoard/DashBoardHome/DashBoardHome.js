import * as React from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import Calander from '../../shared/Calander/Calander';
import Appointments from '../Appointments/Appointments';

const DashBoardHome = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={8} md={4}>
                    <Calander
                       date={date}
                       setDate={setDate}
                    ></Calander>
                </Grid>
                <Grid item xs={12} sm={8} md={8}>
                    <Appointments 
                       date={date}
                    ></Appointments>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DashBoardHome;