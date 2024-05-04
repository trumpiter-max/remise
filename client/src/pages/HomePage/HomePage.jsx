import React from 'react'

import SliderComponent from '../../components/SliderComponent/SliderComponent';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { Divider, Grid, Typography} from '@mui/material';
import ProductFeature from '../../components/Product/ProductFeature';
import Category from '../../components/HeaderComponent/Category/Category';

function FlashSale(){
  return (
      <Grid mt={5} id='flash-sale'>
        <Grid sx={{display: 'flex'}} mb={1} padding={0.5}>
          <FlashOnIcon sx={{color: 'red', height:'auto', width:'35px'}}/>
          <Typography sx={{mr:1, color:'red'}} variant='h5'>Flash Sale</Typography>
          <Grid>
            <Typography variant='h5'>06</Typography>
          </Grid>
        </Grid>
        <ProductFeature/>
      </Grid>
    )
}

function Deals(){
  return (
      <Grid mt={5} id='deal'>
        <Grid sx={{display: 'flex'}} mb={1}>
          <Typography color='primary' sx={{mr:1}} variant='h5'>Deals of the Day</Typography>
        </Grid>
        <ProductFeature/>
      </Grid>
    )
}

function BestSales(){
  return (
    <Grid mt={5} id='best-sale'>
        <Grid sx={{display: 'flex'}} mb={1}>
          <Typography color={'primary'} sx={{mr:1}} variant='h5'>Best Selling Products</Typography>
        </Grid>
        <ProductFeature/>
      </Grid>
    )
}



function HomePage() {
  return (
    <Grid>
      <Grid m={20}>
        <Category/>
        <Grid>
            <SliderComponent/> 
        </Grid>
        <Grid>
          <FlashSale id='flash-sale'></FlashSale>
          <Divider sx={{mt:2}}></Divider>
          <BestSales id='best-sale'></BestSales>
          <Divider sx={{mt:2}}></Divider>
          <Deals id='deal'></Deals>
        </Grid>
      </Grid>
      <Divider sx={{mt:2}}></Divider>
    </Grid>
  )
}

export default HomePage