import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import tivi from '../../resources/images/HomePage/tivi.jpg'
import { getFlashSaleProduct } from '../../api/product';



function ProductFeature({typeProduct}) {

  typeProduct=1;
  let [products, setProducts] = useState([]); // Giá trị mặc định là mảng rỗng
  const [error, setError] = useState(null); // Để lưu lỗi nếu có
  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;
        switch (typeProduct)
        {
          case 1: 
            data = await getFlashSaleProduct(); // Gọi hàm và chờ phản hồi
            break;
        }
        setProducts(data); // Lưu dữ liệu vào state
      } catch (err) {
        setError(err); // Lưu lỗi nếu có
      }
    };

    fetchData(); // Gọi hàm để lấy dữ liệu
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