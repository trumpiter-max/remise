import React from 'react'
import './HomePage.css'

import SliderComponent from '../../components/SliderComponent/SliderComponent';
import slider from '../../resources/images/HomePage/slider.jpg'
import FlashOnIcon from '@mui/icons-material/FlashOn';

import { useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { Grid} from '@mui/material';
import ProductFlashSale from '../../components/HomePage/ProductFlashSale';
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



const names = [
  'Quần áo',
  'Giày dép',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, productName, theme) {
  return {
    fontWeight:
      productName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function Category(){
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
          <Button sx={{textAlign:'center', textTransform: 'none'}}>What's Deal?</Button>
          <Button sx={{textAlign:'center', textTransform:'none'}}>New Deal</Button>
      </Grid>
    </Grid>
  );}
//end category

function FlashSale(){
  return (
      <div className='sale'>
        <div className='sale-bar' style={{background: 'red'}}>
          <FlashOnIcon style={{height: 'auto', color:'white', fontSize: 40}}/>
          <h2>Flash Sale</h2>
          <div className='sale-time'>
            <div className='time'>06</div>
          </div>
        </div>
        <ProductFlashSale/>
      </div>
    )
}

function Deals(){
  return (
      <div className='sale'>
        <div className='sale-bar'>
          <h2>Deals of the Day</h2>
        </div>
        <ProductFlashSale/>
        <div style={{textAlign:'center'}}>
          <Button>See More</Button>
        </div>
      </div>
    )
}

function BestSales(){
  return (
    <div className='sale'>
      <div className='sale-bar'>
        <h2>Best Selling Product</h2>
      </div>
      <ProductFlashSale/>
    </div>
    )
}

function HomePage() {
  return (
    <div style={{background: '#f7f7f7'}}>
      <div id="category" style={{background:'#fff'}}>
        <Category/>
      </div>
      <div id="body">
        <div id="slider" style={{display:'flex'}}>
          <div style={{flex:2}}>
            <SliderComponent/>  
          </div>
          <div style={{ display:'flex', flexDirection:'column' ,flex:1, textAlign:'right', justifyContent:'space-between',
            marginBottom:43}}>
            <img className='sub-banner' src={slider} alt='slider'/>
            <img className='sub-banner' src={slider} alt='slider'/>
          </div>
        </div>
        <Grid sx={{width:'100%', height:'100%'}}>
          <FlashSale></FlashSale>
          <BestSales></BestSales>
          <Deals></Deals>
        </Grid>
      </div>
     
      <div id="footer">
      </div>
    </div>
  )
}

export default HomePage