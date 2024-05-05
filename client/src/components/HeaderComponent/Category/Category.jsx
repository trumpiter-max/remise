import { Button, FormControl, Grid, MenuItem, Select, useTheme } from '@mui/material';
import React from 'react'

const names = [
    'Thời trang',
    'Điện tử',
    'Quần áo',
    'Giày dép',
    'Sách',
    'Nội thất',
  ];

// category
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 300,
    },
  },
};

function getStyles(name, productName, theme) {
    return {
      fontWeight:
        productName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

function Category() {
    const theme = useTheme();
    const [productName, setProductName] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setProductName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Grid>
      <Grid sx={{display: 'flex'}}>
        <FormControl sx={{ m: 1, width: 300,}}>
          <Select
          displayEmpty
          value={productName}
          onChange={handleChange}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label'}}
          open={open}
          onOpen={handleOpen}
          onClose ={handleClose}
          sx={{height:30}}
          >
            <MenuItem disabled value="">
              <Button onClick={handleOpen} sx={{padding:0, marginLeft:0}}>
                Danh mục sản phẩm
              </Button>
            </MenuItem>
            {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, productName, theme)}
            >
            {name}
            </MenuItem>
          ))}
          </Select>
        </FormControl>
          <Button sx={{textAlign:'center', textTransform: 'none', minWidth:'100px'}}>Thời Trang</Button>
          <Button sx={{textAlign:'center', textTransform:'none', minWidth:'100px'}}>Điện tử</Button>
      </Grid>
    </Grid>
  );
}

export default Category