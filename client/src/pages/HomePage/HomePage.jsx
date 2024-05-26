import React, { useState, useEffect } from 'react';
import { Button, Grid, IconButton, InputBase, Paper, Typography, Select, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ProductList from '../../components/Product/ProductList';

import i18n from "i18next";
import { useTranslation } from "react-i18next";

function Deals() {
  const { t, i18n } = useTranslation();
  const rootDomain = 'http://127.0.0.1:8000/api/v1/management/products/';
  const [allProducts, setAllProducts] = useState([]); 
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 10;
  const [page, setPage] = useState(1);

  // filter field
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDiscountRate, setSelectedDiscountRate] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

  useEffect(() => {
    setIsLoading(true);
    fetch(rootDomain)
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
    let filteredData = allProducts;
    if (searchTerm) {
      filteredData = filteredData.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    console.log(filteredData);
    setVisibleProducts(filteredData.slice(0, itemsPerPage));
  }

  const handleFilter = () => {
    let filteredData = allProducts;

    if (selectedCategory) {
      filteredData = filteredData.filter(product => product.category === selectedCategory);
    }
    if (selectedDiscountRate) {
      filteredData = filteredData.filter(product => product.discount === selectedDiscountRate);
    }
    if (selectedPrice) {
      filteredData = filteredData.filter(product => product.price === selectedPrice);
    }

    setVisibleProducts(filteredData.slice(0, itemsPerPage));
  }

  return (
    <Grid mt={5} id='deal' style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <Paper component="form" sx={{ p: '1px 4px', display: 'flex', alignItems: 'center', alignSelf: 'stretch' }}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder={t('search')}
          type='text'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <Button onClick={handleSearch}>
            <SearchIcon />
          </Button>
        </IconButton>
      </Paper>

      <paper>
        <Select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          displayEmpty
          inputProps={{ 'aria-label': 'category' }}>
          <MenuItem value="">{t("allcategory")}</MenuItem>
          <MenuItem value="shirt">Shirts</MenuItem>
          <MenuItem value="pants">Pants</MenuItem>
        </Select>
        <Select
          value={selectedDiscountRate}
          onChange={(e) => setSelectedDiscountRate(e.target.value)}
          displayEmpty
          inputProps={{ 'aria-label': 'discount rate' }}>
          <MenuItem value="">{t("alldiscountrate")}</MenuItem>
          <MenuItem value="asc">{t("discountascending")}</MenuItem>
          <MenuItem value="desc">{t("discountdescending")}</MenuItem>
        </Select>
        <Select
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
          displayEmpty
          inputProps={{ 'aria-label': 'price' }}>
          <MenuItem value="">{t("allprice")}</MenuItem>
          <MenuItem value="asc">{t("priceascending")}</MenuItem>
          <MenuItem value="desc">{t("pricedescending")}</MenuItem>
        </Select>
        <Button color="primary" variant="contained" size="small" component="a" onClick={handleFilter} target="_blank">{t("filterbutton")}</Button>
      </paper>
      
      <Button color="primary" variant="text" size="small" component="a" href="/searchform/" target="_blank"> {t("aifilter")} </Button>
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
