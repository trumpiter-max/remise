import React from 'react'
import { Card } from '@mui/material'
import { CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import {useNavigate} from 'react-router-dom'
function ProductItem({ productItem }) {
  const id=productItem.id;
  const navigate = useNavigate();
  const handleClick=()=>{
    navigate(`/product/${id}`);
  };
  return (
    <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            width="100"
            src={productItem.thumbnail}
            alt={productItem.title}
            onClick={handleClick}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div"
            display={'-webkit-box'}
            sx={{display:'-webkit-box', 
            WebkitBoxOrioverflow: 'hidden',
            textOverflow: 'ellipsis',
            minHeight:'3em'}}
            overflow={'hidden'}
            >
              {productItem.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {productItem.discount} VND
            </Typography>
            <Typography variant="body2" color="red" >
              Discount: {productItem.discount_rate}%
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  )
}

export default ProductItem