import React from 'react';
import { Container, Table, Button } from '@mui/material';
const Transaction = (props) => {
  return (
    <Container>
      <Container maxWidth="lg">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {props.items.map((x) => (
              <tr key={x.id}>
                <td>{x.name}</td>
                <td>{x.address}</td>
                <td>{x.city}</td>
                <td>
                  <Button onClick={() => props.onDelete(x.id)}>Delete</Button>
                </td>
                <td>
                  <Button onClick={() => props.onEdit(x)}>Edit</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </Container>
  );
};

export default Transaction;
