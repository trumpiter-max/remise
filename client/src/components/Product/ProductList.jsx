import React from 'react'
import ProductItem from './ProductItem'
import { Grid } from '@mui/material'


function ProductList({productList,type}) {
  const renderProductItem=(productItem)=>{
    switch (type){
      case 1:
        return <ProductItem productItem={productItem} />;
    }
  }
  return (
    <Grid container spacing={2}>
        {productList.map((productItem, index) => (
          <Grid item xs={12} sm={6} md={3} lg={2.4} >
            {renderProductItem(productItem)}
          </Grid>
        ))}
    </Grid>
  )
}

export default ProductList