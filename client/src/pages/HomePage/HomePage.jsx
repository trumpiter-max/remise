import React from 'react'

import FlashOnIcon from '@mui/icons-material/FlashOn';
import { Divider, Grid, Typography} from '@mui/material';
import ProductFeature from '../../components/Product/ProductFeature';
import Category from '../../components/HeaderComponent/Category/Category';
import { useEffect } from 'react';
import Slider from '../../components/Slider/Slider';

import tivi from '../../resources/images/HomePage/tivi.jpg'

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
          <Typography color='primary' sx={{mr:1}} variant='h5'>Gợi ý Hôm Nay</Typography>
        </Grid>
        <ProductFeature/>
      </Grid>
    )
}

function BestSales(){
  return (
    <Grid mt={5} id='best-sale'>
        <Grid sx={{display: 'flex'}} mb={1}>
          <Typography color={'primary'} sx={{mr:1}} variant='h5'>Sản Phẩm Bán Chạy</Typography>
        </Grid>
        <ProductFeature/>
      </Grid>
    )
}

const images=[
  tivi,
  'https://graphicsfamily.com/wp-content/uploads/2020/11/Professional-Web-Banner-AD-in-Photoshop-scaled.jpg',
  tivi,
  'https://graphicsfamily.com/wp-content/uploads/2020/11/Professional-Web-Banner-AD-in-Photoshop-scaled.jpg'
]

function HomePage() {
  useEffect(() => {
    document.title = "Remise"
  }, []);
  return (
    <Grid>
      <Grid m={20}>
        <Category/>
        <Grid>
            {/* <SliderComponent/>  */}
            <Slider images={images} />
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