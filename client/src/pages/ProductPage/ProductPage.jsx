import React, { useEffect, useState } from 'react'
import './ProductPage.css'
import { Button, Divider, Grid, Pagination, Typography } from '@mui/material'
import Stack from '@mui/material/Stack';
import { red } from '@mui/material/colors'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useParams } from 'react-router-dom';
import { getDetailProduct } from '../../api/product';
import { addNotification } from '../../components/NotificationSlice/notificationSlice';
import { useDispatch, useSelector } from 'react-redux';

function ProductPage() {
  const {id}=useParams();
  const dispatch = useDispatch();
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
    const dataProduct=product;
    dispatch(addNotification(dataProduct));
    console.log('ok');
    // const notifications = useSelector((state) => state.notifications);
    // console.log(notifications);
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
            <Button onClick={handleFavoriteIcon()}>
              <FavoriteBorderIcon sx={{cursor:'pointer'}}/>
            </Button>
          </Grid>
          <Grid>
            <Typography variant='h5' sx={{maxWidth:500, textAlign:'left',fontWeight:'bold'}}>
            Chỉ còn: {product.discount} VNĐ
            </Typography>
            <Typography sx={{color:'red'}} variant='h4'>-{product.discount_rate}%</Typography>
          </Grid>
          <Typography sx={{textDecoration:'line-through', textAlign:'left'}}>
            {product.price} VNĐ
          </Typography>
          <Typography sx={{maxWidth:500, textAlign:'left'}}>
            {product.description}
          </Typography>
          <Typography sx={{maxWidth:500, textAlign:'left', cursor:'pointer'}}>
            {product.url}
          </Typography>
          
        </Grid>
      </Grid>
      {/* <TablePaginationDemo/> */}
      <div className='product-similar' >
        {/* <h5>Các sản phẩm tương tự</h5> */}
        {/* <ProductFlashSale/> */}
      </div>
    </Grid>
    <Divider/>
    </Grid>
  )
}
export default ProductPage

