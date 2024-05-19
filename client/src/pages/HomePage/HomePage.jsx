import React, { useState, useEffect } from 'react';
import { Button, Grid, IconButton, InputBase, Paper, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ProductList from '../../components/Product/ProductList';

function Deals() {
  const [allProducts, setAllProducts] = useState([]); 
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 10;
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    fetch('http://127.0.0.1:8000/api/v1/management/products/')
      .then(response => response.json())
      .then(data => {
        setAllProducts(data);
        setVisibleProducts(data.slice(0, itemsPerPage));
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  const loadMore = () => {
    const newPage = page + 1;
    const nextItems = allProducts.slice(page * itemsPerPage, newPage * itemsPerPage);
    setVisibleProducts(prevItems => [...prevItems, ...nextItems]);
    setPage(newPage);
  };

  const handleSearch = () => {
    const results = allProducts.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setVisibleProducts(results);
  }

  return (
    <Grid mt={5} id='deal' style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <Paper component="form" sx={{ p: '1px 4px', display: 'flex', alignItems: 'center', alignSelf: 'stretch' }}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Find products"
          type='text'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <Button onClick={handleSearch}>
            <SearchIcon />
          </Button>
        </IconButton>
      </Paper>
      
      <Button color="primary" variant="text" size="small" component="a" href="/searchform/" target="_blank">Filter</Button>
      <Grid sx={{display: 'flex'}} mb={1} mt={2}>
        <Typography color={'primary'} sx={{mr:1}} variant='h5'>
          {searchTerm ? 'Search results' : 'Recommendation'}
        </Typography>
      </Grid>
      <ProductList productList={visibleProducts} type={1} />
      <Grid mt={1} className="load-more">
        <Button onClick={loadMore} className="btn-grad" disabled={isLoading || visibleProducts.length >= allProducts.length}>
          {isLoading ? 'Loading...' : 'Load More'}
        </Button>
      </Grid>
    </Grid>
  );
}

function HomePage() {
  return (
    <Grid m={10}>
      <Deals />
    </Grid>
  )
}

export default HomePage;
