import React, { Suspense } from 'react'
import { Grid } from '@mui/material'
import { lazy } from 'react'

const ProductItem=lazy(()=>import('./ProductItem'))
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
            <Suspense fallback={<div>Loading...</div>}>
            {renderProductItem(productItem)}
            </Suspense>
          </Grid>
        ))}
    </Grid>
  )
}

export default ProductList