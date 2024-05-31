import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Paper from "@mui/material/Paper";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Typography, Box } from '@mui/material';

const categories = ['Electronics', 'Fashion', 'Books', 'Sports'];
const sortingOptions = ['Price ascending', 'Price descending', 'Latest'];
const review = ['Very Positive', 'Positive', 'Neutral', 'Negative', 'Very Negative'];
const sales = ['Deep discount', 'Free shipping'];
const label = ['Good price', "For luxury", "Best performance on price", "Cheap", "On trending"];
;
export default function SearchForm() {

  const handleSearch = () => {
    console.log('Search');
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          height: "fixed",
          width: "500px",
          flexDirection: "column",
          justifyItems:"center",
          alignItems: "center"
        }}
      >
        <Box sx={{ textAlign: 'left', width: '100%', marginBottom: '8px' , marginLeft: '100px'}}>
          <Typography variant="body1">Keyword</Typography>
        </Box>
        <TextField style={{ width: 400 }} />
        <br></br>

        <Box sx={{ width: '80%', marginBottom: '8px' }}>
          <Grid container spacing={2} alignItems="left">
            <Grid item xs={6}>
              <Box sx={{ textAlign: 'left', width: '100%', marginBottom: '8px' , marginLeft: '0px'}}>
                <Typography variant="body1">Category</Typography>
              </Box>
              <Autocomplete
                options={categories}
                renderInput={(params) => <TextField {...params} />}
              />
            </Grid>
            <Grid item xs={6}>
            <Box sx={{ textAlign: 'left', width: '100%', marginBottom: '8px' , marginLeft: '0px'}}>
                <Typography variant="body1">Brand</Typography>
              </Box>
              <Autocomplete
                options={label}
                renderInput={(params) => <TextField {...params} />}
              />
            </Grid>
          </Grid>
        </Box>


        <br></br>
        <Box sx={{ textAlign: 'left', width: '100%', marginBottom: '8px' , marginLeft: '100px'}}>
          <Typography variant="body1">Sort</Typography>
        </Box>
        <Autocomplete
          options={sortingOptions}
          renderInput={(params) => <TextField style={{ width: 400 }} {...params} />}
        />
        <br></br>

      
        <Box sx={{ width: '80%', marginBottom: '8px' }}>
          <Grid container spacing={2} alignItems="left">
            <Grid item xs={6}>
              <Autocomplete
                options={review}
                renderInput={(params) => <TextField {...params} label="Rating"/>}
              />
            </Grid>
            <Grid item xs={6}>
              <Autocomplete
                options={sales}
                renderInput={(params) => <TextField {...params} label = "Promotion"/>}
              />
            </Grid>
          </Grid>
        </Box>

        <br></br>
        <Button variant="contained" color="primary" onClick={handleSearch} aria-label='btn-search-form'>
          Search
        </Button>
      </Paper>
    </div>
  );
}
