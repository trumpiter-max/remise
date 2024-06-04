import React, { Suspense } from 'react'
import { Grid } from '@mui/material'
import { lazy } from 'react'

const ProductItem=lazy(()=>import('./ProductItem'))
function ProductList({productList}) {
  const renderProductItem=(productItem)=>{
    return <ProductItem productItem={productItem} />;
  }
  return (
    <Grid container spacing={2}>
        {productList.map((productItem, index) => (
          <Grid item xs={12} sm={6} md={3} lg={2.4} >
            <Suspense fallback={<div></div>}>
            {renderProductItem(productItem)}
            </Suspense>
          </Grid>
        ))}
    </Grid>
  )
}

export default ProductList