import React from 'react'
import ProductFlashSale from '../../components/HomePage/ProductFlashSale'
import './ProductPage.css'
import { Button, Pagination, Typography } from '@mui/material'
import Stack from '@mui/material/Stack';
import { red } from '@mui/material/colors'
import Rating from '@mui/material/Rating';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TablePagination from '@mui/material/TablePagination';
import tivi from '../../resources/images/HomePage/tivi.jpg';


function ProductPage() {
  return (
    <div style={{background:'#f7f7f7'}}>
      <div id='product'>
        <div className='product-introduction'>
        <Stack className='product-card' spacing={2} >
          <img src={tivi} alt='tivi'></img>
          <Pagination count={10} variant="outlined" shape="rounded"/>
        </Stack>
        <div className='product-react' style={{position:'relative', minWidth:200}}>
          <Typography sx={{color:red[700], fontWeight:700}}>LAZ Small</Typography>
          <Typography>Tivi Sony 65 inch</Typography>
          <Stack sx={{display:'flex', flexDirection: 'row', position:'absolute', top:0, right:0}}>
            <ShareIcon></ShareIcon>
            <FavoriteBorderIcon></FavoriteBorderIcon>
          </Stack>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        </div>
        <div className='product-inform' style={{display:'flex', flexDirection:'column'}}>
          <div className='location'>
            <h7>Hồ Chí Minh, Quận 1, Phường Phạm Ngũ Lão</h7>
            <Button>Thay đổi</Button>
          </div>
          <hr style={{fontWeight:100}}></hr>
          <h7>NHÀ BÁN HÀNG</h7>
          <h7>ĐIỆN MÁY XANH</h7>
          <hz></hz>
          <Button>ĐẾN GIAN HÀNG</Button>
          
        </div>
      </div>
      <TablePaginationDemo/>
      <div className='product-similar'>
        <h5>Các sản phẩm tương tự</h5>
        <ProductFlashSale/>
      </div>
    </div>
    </div>
  )
}


function TablePaginationDemo() {const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TablePagination
      component="div"
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
export default ProductPage

