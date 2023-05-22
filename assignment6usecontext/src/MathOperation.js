import React, { useContext, useRef } from 'react';
import { TextField, Button, Box } from '@mui/material';
import MyContext from './MyContext';

function MathOperation({ title }) {
  const { message, updateMessage } = useContext(MyContext);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);

  const handleResult = () => {
    const num1 = Number(inputRef1.current.value);
    const num2 = Number(inputRef2.current.value);
    let result = 0;

    if (title === 'sum') {
      result = num1 + num2;
      updateMessage({ ...message, sum: result });
    } else if (title === 'divide') {
      result = num1 / num2;
      updateMessage({ ...message, divide: result });
    } else if (title === 'minus') {
      result = num1 - num2;
      updateMessage({ ...message, minus: result });
    }
  };

  return (
    <Box sx={{ marginBottom: '1rem', padding: '1rem', backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center' }}>
      <TextField sx={{ marginRight: '0.5rem' }} inputRef={inputRef1} type="number" />
      <TextField sx={{ marginRight: '0.5rem' }} inputRef={inputRef2} type="number" />
      <Button variant="contained" onClick={handleResult}>
        {title}
      </Button>
    </Box>
  );
}

export default MathOperation;
