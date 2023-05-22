import React from 'react';
import { Container, FormControl, InputLabel, InputAdornment, OutlinedInput, IconButton, Grid } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
const Search = (props) => {
  return (
    <Container>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} lg={8}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="inputPassword5">Search</InputLabel>
            <OutlinedInput
              id="inputPassword5"
              type="text"
              placeholder="search here"
              value={props.SearchVal}
              onChange={props.onChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end" aria-label="search">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Search;
