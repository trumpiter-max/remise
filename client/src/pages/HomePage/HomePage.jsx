import React from 'react'

import SliderComponent from '../../components/SliderComponent/SliderComponent';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { Divider, Grid, Typography} from '@mui/material';
import ProductFeature from '../../components/Product/ProductFeature';
import HeroPage from '../../components/HeaderComponent/HeroPage';
import Category from '../../components/HeaderComponent/Category/Category';
import { useEffect } from 'react';


function FlashSale(){
  return (
      <Grid mt={5}>
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
      <Grid mt={5}>
        <Grid sx={{display: 'flex'}} mb={1}>
          <Typography color='primary' sx={{mr:1}} variant='h5'>Deals of the Day</Typography>
        </Grid>
        <ProductFeature/>
      </Grid>
    )
}

function BestSales(){
  return (
    <Grid mt={5}>
        <Grid sx={{display: 'flex'}} mb={1}>
          <Typography color={'primary'} sx={{mr:1}} variant='h5'>Best Selling Products</Typography>
        </Grid>
        <ProductFeature/>
      </Grid>
    )
}



function HomePage() {
  useEffect(() => {
    document.title = "Remise"
  }, []);
  return (
    <Grid>
      <Grid m={20}>
        <Category/>
        <Grid>
            <SliderComponent/> 
        </Grid>
        <Grid>
          <FlashSale ></FlashSale>
          <Divider sx={{mt:2}}></Divider>
          <BestSales></BestSales>
          <Divider sx={{mt:2}}></Divider>
          <Deals></Deals>
        </Grid>
      </Grid>
      <Divider sx={{mt:2}}></Divider>
    </Grid>
  )
}

export default HomePage