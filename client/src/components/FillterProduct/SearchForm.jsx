import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Paper from "@mui/material/Paper";
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
//import Button from '@material-ui/Button';
import Button from '@mui/material/Button';
import { Typography, Box } from '@mui/material';

const categories = ['Electronics', 'Fashion', 'Books', 'Sports'];
const sortingOptions = ['Price: Low to High', 'Price: High to Low', 'Newest', 'Oldest'];
const review = ['5 sao', '4 sao', '3 sao', '2 sao', '1 sao'];
const sales = ['Đang giảm giá', 'Giảm ship' ]

export default function SearchForm() {
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
        <h2>Tìm kiếm nâng cao</h2>
        <Box sx={{ textAlign: 'left', width: '100%', marginBottom: '8px' , marginLeft: '100px'}}>
          <Typography variant="body1">Từ khóa</Typography>
        </Box>
        <TextField style={{ width: 400 }} />
        <br></br>
        <Box sx={{ textAlign: 'left', width: '100%', marginBottom: '8px' , marginLeft: '100px'}}>
          <Typography variant="body1">Danh mục</Typography>
        </Box>
        <Autocomplete
          options={categories}
          renderInput={(params) => <TextField style={{ width: 400 }} {...params}/>}
        />
        <br></br>
        <Box sx={{ textAlign: 'left', width: '100%', marginBottom: '8px' , marginLeft: '100px'}}>
          <Typography variant="body1">Sắp xếp</Typography>
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
                renderInput={(params) => <TextField {...params} label="Đánh giá"/>}
              />
            </Grid>
            <Grid item xs={6}>
              <Autocomplete
                options={sales}
                renderInput={(params) => <TextField {...params} label = "Khuyến mãi"/>}
              />
            </Grid>
          </Grid>
        </Box>
        
        
        <br></br>
        <Button variant="contained" color="primary">
          Tìm kiếm
        </Button>
      </Paper>
    </div>
  );
}
