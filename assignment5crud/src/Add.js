import React, { useState } from 'react';
import { Container, TextField, Button, Select, MenuItem, FormControl } from '@mui/material';
const Add = ({ onAddPersonInfo }) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
  
    const handleAddCar = () => {
      const obj = {
        name: name,
        address: address,
        city: city
      };
  
      onAddPersonInfo(obj);
      setName('');
      setAddress('');
      setCity('');
    };
  
    return (
      <Container>
        <Container maxWidth="sm">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (name && address && city) {
                handleAddCar();
              }
            }}
          >
            <TextField
              type="text"
              label="Name"
              fullWidth
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
            <TextField
              type="text"
              label="Address"
              fullWidth
              className="mt-3"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              required
            />
            <FormControl fullWidth className="mt-3">
              <Select
                label="Select City"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                required
              >
                <MenuItem value="">Select City</MenuItem>
                <MenuItem value="Faislabad">Faislabad</MenuItem>
                <MenuItem value="Islamabad">Islamabad</MenuItem>
                <MenuItem value="RawalPindi">RawalPindi</MenuItem>
              </Select>
            </FormControl>
            <Button className="mt-3" type="submit" variant="contained">
              Add Records
            </Button>
          </form>
        </Container>
      </Container>
    );
  };
  
  export default Add;
  