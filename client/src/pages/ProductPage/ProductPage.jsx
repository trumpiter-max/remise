import React, { useEffect, useState } from 'react'
import './ProductPage.css'
import { Button, Divider, Grid, Typography } from '@mui/material'
import Stack from '@mui/material/Stack';
import { red } from '@mui/material/colors'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useParams } from 'react-router-dom';
import { getDetailProduct } from '../../api/product';

function ProductPage() {
  const {id}=useParams();
  const [product,setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data= await getDetailProduct(id);
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product details:");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);
  function handleFavoriteIcon () {
    // const dataProduct=product;
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }


  return (
    <Grid>
      <Grid id='product'>
        <Grid container className='product-introduction'>
        <Stack className='product-card' spacing={2} xs={12} md={6}>
          <img heighth={200} src={product.thumbnail} alt='tivi' style={{maxHeight:'200px'}}></img>
        </Stack>
        <Grid className='product-react'  style={{position:'relative', minWidth:200, paddingRight:20, textAlign:'left'}}>
          <Typography sx={{color:red[700], fontWeight:700, maxWidth:500}}>{product.title}</Typography>
          <Grid sx={{display:'flex', flexDirection: 'row', position:'absolute', top:0, right:0}}>
            <Button onClick={handleFavoriteIcon()} aria-label='click-favorite-icon'>
              <FavoriteBorderIcon sx={{cursor:'pointer'}}/>
            </Button>
          </Grid>
          <Grid>
            <Typography variant='h5' sx={{maxWidth:500, textAlign:'left',fontWeight:'bold'}}>
            New price: {product.discount} VNĐ
            </Typography>
            <Typography sx={{color:'red'}} variant='h4'>-{product.discount_rate}%</Typography>
          </Grid>
          <Typography sx={{textDecoration:'line-through', textAlign:'left'}}>
            {product.price} VNĐ
          </Typography>
          <Typography sx={{maxWidth:500, textAlign:'left'}}>
            {product.description}
          </Typography>
          <Button sx={{maxWidth:500, textAlign:'left'}} href={product.url} aria-label='btn-buy-now'>
            Buy Now
          </Button>
          
        </Grid>
      </Grid>
      {/* <TablePaginationDemo/> */}
      <div className='product-similar' >
        {/* <h5>Relative products</h5> */}
      </div>
    </Grid>
    <Divider/>
    </Grid>
  )
}
export default ProductPage

