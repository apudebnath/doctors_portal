import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const Admin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const {token} = useAuth();
console.log(token)
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = (e) => {
        e.preventDefault();
        const user = {email};
        fetch('https://aqueous-woodland-69983.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                setSuccess(true);
                setEmail('');
                console.log(data);
            }
            
        })


    }
    return (
        <div>
            <h2>Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                   sx={{width: '50%'}} 
                   label="Email"
                   type="email" 
                   onBlur={handleOnBlur}
                   variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Admin Created Successfully.</Alert>}
        </div>
    );
};

export default Admin;