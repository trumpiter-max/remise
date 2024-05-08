import React from 'react'
import { Card } from '@mui/material'
import { CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

function ProductItem({ productItem }) {
  return (
    <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            width="100"
            src={productItem.thumbnail}
            alt={productItem.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div"
            display={'-webkit-box'}
            sx={{display:'-webkit-box', WebkitBoxOrient: 'vertical', // Đặt hướng là dọc
            WebkitLineClamp: 2, // Giới hạn số dòng
            overflow: 'hidden', // Cắt bớt nội dung tràn
            textOverflow: 'ellipsis',}}
            overflow={'hidden'}
            >
              {productItem.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {productItem.price} VND
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {productItem.discount_rate} VND
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  )
}

export default ProductItem