import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import { getFlashSaleProduct } from '../../api/product';



function ProductFeature({typeProduct}) {

  typeProduct=1;
  let [products, setProducts] = useState([]); 
  const [error, setError] = useState(null); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;
        switch (typeProduct)
        {
          case 1: 
            data = await getFlashSaleProduct();
            break;
        }
        setProducts(data); 
      } catch (err) {
        setError(err); 
      }
    };

    fetchData();
  }, []); 


  if (error){
    return (<div>
      Error in display product:{error.message.msgBody}
    </div>)
  }
  return (
    <div>
        <ProductList productList={products} type={typeProduct}/>
    </div>
  )
}

export default ProductFeature