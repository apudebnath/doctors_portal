import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../Hooks/useAuth';

const Appointments = ({date}) => {
    const {user, token} = useAuth();
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        const url = `https://aqueous-woodland-69983.herokuapp.com/appointments?email=${user.email}&date=${date.toLocaleDateString()}`
        fetch(url, {
          headers: {
            'authorization': `Bearer ${token}`
          }
        })
        .then(res => res.json())
        .then(data => setAppointments(data))

    }, [date])
    return (
        <div>
            <h2>Appointments: {appointments.length}</h2>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Patient's Name</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right"> Service Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow
              key={appointment._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {appointment.patientName}
              </TableCell>
              <TableCell align="right">{appointment.time}</TableCell>
              <TableCell align="right">{appointment.date}</TableCell>
              <TableCell align="right">{appointment.email}</TableCell>
              <TableCell align="right">{appointment.serviceName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default Appointments;