import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import tivi from '../../resources/images/HomePage/tivi.jpg'
import { getFlashSaleProduct } from '../../api/product';

const tiviImage=tivi;


function ProductFeature(typeProduct) {

  let [products, setProducts] = useState([]); // Giá trị mặc định là mảng rỗng
  const [error, setError] = useState(null); // Để lưu lỗi nếu có
  useEffect(() => {
    const fetchData = async () => {
      try {
        switch (typeProduct)
        {
          case 1: 
            var data = await getFlashSaleProduct(); // Gọi hàm và chờ phản hồi
        }
        setProducts(data); // Lưu dữ liệu vào state
      } catch (err) {
        setError(err); // Lưu lỗi nếu có
      }
    };

    fetchData(); // Gọi hàm để lấy dữ liệu
  }, []); 

  typeProduct=1;
  const productList=[
    {
        id:1,
        name: 'TiviSony',
        thumbnailUrl: tiviImage,
        price: 10
    },
    {
        id:2,
        name: 'TiviSony2',
        thumbnailUrl: tiviImage,
        price: 10
    },
    {
        id:3,
        name: 'TiviSony3',
        thumbnailUrl: tiviImage,
        price: 10
    },
    {
        id:4,
        name: 'TiviSony4',
        thumbnailUrl: tiviImage,
        price: 10
    },
    {
      id:4,
      name: 'TiviSony4',
      thumbnailUrl: tiviImage,
      price: 10},
      {
        id:4,
        name: 'TiviSony4',
        thumbnailUrl: tiviImage,
        price: 10
      },
    {
        id:4,
        name: 'TiviSony4',
        thumbnailUrl: tiviImage,
        price: 10
    },
  ]

  // if (products!=null)//?
  // {
  //   products=productList;
  // }

  if (error){
    return <div>
      Error in display product:{error.message.msgBody}
    </div>
  }
  return (
    <div>
        <ProductList productList={productList} type={typeProduct}/>
    </div>
  )
}

export default ProductFeature