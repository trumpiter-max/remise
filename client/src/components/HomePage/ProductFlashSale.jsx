import React from 'react'
import Card from '@mui/material/Card';
import sampleImage from '../../resources/images/HomePage/tivi.jpg'
import { CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
const image1= sampleImage;
const products = [
    { name: 'Sản phẩm 1', image: image1, price: '100.000' },
    { name: 'Sản phẩm 2', image: image1, price: '200.000' },
    { name: 'Sản phẩm 3', image: image1, price: '300.000' },
    { name: 'Sản phẩm 4', image: image1, price: '360.000' },
    { name: 'Sản phẩm 3', image: image1, price: '300.000' },
    { name: 'Sản phẩm 4', image: image1, price: '360.000' },
    // Thêm sản phẩm khác nếu cần
  ];
// Component Card
const ProductCard = ({ product }) => {
    return (
        <Card style={{width:"25%"}} mb={1}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={product.image}
            alt={product.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.price} VND
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
};



const ProductList = () => {
  
    return (
      <div className="product-list" style={{display:'flex', flexDirection: 'row',  width: "100%", flexWrap:'wrap',}}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    );
};

function ProductFlashSale() {
  return (
    <div className='app'>
        <ProductList />
    </div>
  )
}

export default ProductFlashSale