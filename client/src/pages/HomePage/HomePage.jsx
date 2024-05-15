import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { Button, Divider, Grid, IconButton, InputBase, Paper, Typography} from '@mui/material';
import ProductFeature from '../../components/Product/ProductFeature';
// import Category from '../../components/HeaderComponent/Category/Category';
import { useEffect } from 'react';
// import Slider from '../../components/Slider/Slider';

import tivi from '../../resources/images/HomePage/tivi.jpg'
import ProductList from '../../components/Product/ProductList';

function FlashSale(){
  return (
      <Grid mt={5} id='flash-sale'>
        <Grid sx={{display: 'flex'}} mb={1} padding={0.5}>
          <FlashOnIcon sx={{color: 'red', height:'auto', width:'35px'}}/>
          <Typography sx={{mr:1, color:'red'}} variant='h5'>Flash Sale</Typography>
          <Grid>
            <Typography variant='h5'>06</Typography>
          </Grid>
        </Grid>
        <ProductFeature/>
      </Grid>
    )
}

function Deals() {

  const [allProducts, setAllProducts] = useState([]); // Lưu trữ toàn bộ dữ liệu
  const [visibleProducts, setVisibleProducts] = useState([]); // Dữ liệu hiển thị trên UI
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const itemsPerPage = 10; // Số lượng items mỗi trang
  const [page, setPage] = useState(1); // Trang hiện tại
  const [searchTerm, setSearchTerm] = useState('');
  const[isSearch, setIsSearch]=useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch('http://127.0.0.1:8000/api/v1/management/products/')
      .then(response => response.json())
      .then(data => {
        function shuffleArray(array) {
          const shuffledArray = [...array];
          for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
          }
          return shuffledArray;
        }
        const shuffledProducts = shuffleArray(data);
        setAllProducts(shuffledProducts); // Lưu toàn bộ dữ liệu
        setVisibleProducts(data.slice(0, itemsPerPage)); // Hiển thị chỉ số lượng nhất định
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        // setErrorMsg('Failed to load data');
        setIsLoading(false);
      });
  }, []);

  const loadMore = () => {
    const newPage = page + 1;
    const nextItems = allProducts.slice(page * itemsPerPage, newPage * itemsPerPage);
    setVisibleProducts(prevItems => [...prevItems, ...nextItems]);
    setPage(newPage);
  };
  const handleSearch=()=>{
    setIsSearch(true);
    const results = allProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  setVisibleProducts(results);
  }
  useEffect(() => {
    document.title = "Remise"
  }, []);
  return (
    <div>
      <Grid mt={5} id='deal'>
      <Paper component="form"
                    sx={{ p: '1px 4px', display: 'flex', alignItems: 'center', width: 240 }}>
                    {/* <Grid flexGrow={2}></Grid> */}
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Tìm kiếm sản phẩm"
                      type='text'
                      onChange={(e)=>setSearchTerm(e.target.value)}
                      />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                      <Button onClick={handleSearch}>
                        <SearchIcon></SearchIcon>
                    </Button>
        </IconButton>
        </Paper>
        <Grid sx={{display: 'flex'}} mb={1} mt={2}>
          {!isSearch&&<Typography color={'primary'} sx={{mr:1}} variant='h5'>Gợi ý cho bạn</Typography>}
          {isSearch&&<Typography color={'primary'} sx={{mr:1}} variant='h5'>Kết quả tìm kiếm</Typography>}

        </Grid>
        <ProductList productList={visibleProducts} type={1} />
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <Grid mt={1} className="load-more">
          <Button onClick={loadMore} className="btn-grad" disabled={isLoading || visibleProducts.length >= allProducts.length}>
            {isLoading ? 'Loading...' : 'Load More'}
          </Button>
        </Grid>
      </Grid>
      
    </div>
  );
}

function BestSales(){
  return (
    <Grid mt={5} id='best-sale'>
        <Grid sx={{display: 'flex'}} mb={1}>
          <Typography color={'primary'} sx={{mr:1}} variant='h5'>Sản Phẩm Bán Chạy</Typography>
        </Grid>
        <ProductFeature/>
      </Grid>
    )
}

const images=[
  tivi,
  'https://graphicsfamily.com/wp-content/uploads/2020/11/Professional-Web-Banner-AD-in-Photoshop-scaled.jpg',
  tivi,
  'https://graphicsfamily.com/wp-content/uploads/2020/11/Professional-Web-Banner-AD-in-Photoshop-scaled.jpg'
]

function HomePage() {

  
  return (
    <Grid>
      <Grid m={10}>
     
        {/* <Category/> */}
        {/* <Grid>
            <SliderComponent/> 
        </Grid> */}
        <Grid>
          {/* <FlashSale ></FlashSale> */}
          {/* <Divider sx={{mt:2}}></Divider> */}
          {/* <BestSales></BestSales> */}
          {/* <Divider sx={{mt:2}}></Divider> */}
          <Deals></Deals>
        </Grid>
      </Grid>
      <Divider sx={{mt:2}}></Divider>
    </Grid>
  )
}

export default HomePage