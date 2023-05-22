

import React from 'react';
import { useContext } from 'react';
import { Typography, Container } from '@mui/material';
import MathOperation from './MathOperation';
import MyContext from './MyContext';

export default function App() {
  const { message } = useContext(MyContext);

  return (
    <Container maxWidth="sm">
      <Typography variant="body1">The result of sum is {message.sum}</Typography>
      <Typography variant="body1">The result of divide is {message.divide}</Typography>
      <Typography variant="body1">The result of minus is {message.minus}</Typography>

      <MathOperation title="sum" />
      <MathOperation title="divide" />
      <MathOperation title="minus" />
    </Container>
  );
}
