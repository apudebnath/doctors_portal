import { Button, Container, Grid, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleFormSubmit = e => {
        e.preventDefault();
        if(!image){
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        fetch('https://aqueous-woodland-69983.herokuapp.com/doctors', {
            method: 'POST',
            body: formData,
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
          setSuccess('Successfully added Doctor.');
            }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }

    return (
        <div>
            <h2>Add Doctor</h2>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <form onSubmit={handleFormSubmit}>
                            <TextField
                                sx={{width: '51%'}}
                                label="Your Name"
                                type="text"
                                name="name"
                                variant="standard"
                                required
                                onChange={e => setName(e.target.value)}
                            />
                            <TextField
                                sx={{width: '51%'}}
                                label="Your Email"
                                type="email"
                                name="email"
                                variant="standard"
                                required
                                onChange={e => setEmail(e.target.value)}
                            />
                            <Input 
                                sx={{width: '51%', my:1}}
                                accept="image/*" 
                                type="file"
                                onChange={e => setImage(e.target.files[0])} />
                                <br />
                            <Button 
                                variant="contained" 
                                type="submit">
                                Upload
                            </Button>
                        </form>
                        {success && <p style={{color: 'green'}}>{success}</p>}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default AddDoctor;