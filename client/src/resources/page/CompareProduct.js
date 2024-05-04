import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import sample_product from '../images/image.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : '#ffffff',
  ...theme.typography.body2,
  padding: theme.spacing(-2),
  textAlign: 'center',
  textJustify: 'center',
  justifyItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
}));

const image1= sample_product;
const products = [
    { name: 'Sản phẩm 1', image: sample_product, price: '100.000' },
    { name: 'Sản phẩm 2', image: sample_product, price: '200.000' },
    { name: 'Sản phẩm 3', image: sample_product, price: '300.000' },
    { name: 'Sản phẩm 4', image: sample_product, price: '360.000' },
    { name: 'Sản phẩm 3', image: sample_product, price: '300.000' },
    { name: 'Sản phẩm 4', image: sample_product, price: '360.000' },
    // Thêm sản phẩm khác nếu cần
  ];

  const ProductList = () => {
    return (
      <div className="product-list" style={{display:'flex', flexDirection: 'row',  width: "100%", flexWrap:'wrap'}}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    );
};

const ProductCard = ({ product }) => {
  return (
    <Container>

    
                <Card style={{width:"100%"}}>
                <Grid containr spacing={3}>

                
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="40"
                    width="40"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.price} VND
                    </Typography>
                  </CardContent>
                </CardActionArea>
                </Grid>
                <Grid item xs>
                    <Button>Xem ngay</Button>
                </Grid>
                </Card> 
                
          </Container>               
  );
};

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                <Typography variant='h5' textAlign={'center'}>Tên sản phẩm</Typography>
                <img src={sample_product}></img>
                <Typography variant='h6' textAlign={'center'} color={'red'}>10.006.090 VND</Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                    <Typography variant='h5' textAlign={'center'}>Đánh giá</Typography>
                    <p>- Chất liệu: Clog có thể được làm từ nhiều loại chất liệu khác nhau như da, nhựa, gỗ, vải, và cao su. 
                        Chất liệu ảnh hưởng đến độ bền, thoải mái và tính năng chống trơn trượt của đôi dép.</p>
                    <p>- Chất liệu: Clog có thể được làm từ nhiều loại chất liệu khác nhau như da, nhựa, gỗ, vải, và cao su. 
                        Chất liệu ảnh hưởng đến độ bền, thoải mái và tính năng chống trơn trượt của đôi dép.</p>

                </Paper>
              </Grid>
              {/* Recent Deposits */}
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Container sx={{ p: -2, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='h6' textAlign={'center'} color={'blueviolet'}>Đề xuất</Typography>
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={1} lg={3}>
                                    <Card maxWidth="sx" textAlign='center'>
                                        <CardMedia
                                            sx={{ height: 115 }}
                                            image={sample_product}
                                            title="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                                            9.000.000 VND
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                        <Grid container justify="center">
                                            <Button variant="contained" color="primary" sx={{margin:'auto'}}>
                                                Chợ tốt
                                            </Button>
                                        </Grid>
                                        </CardActions>
                                    </Card>
                            </Grid>
                            <Grid item xs={12} md={1} lg={3}>
                            <Card maxWidth="sx" textAlign='center'>
                                        <CardMedia
                                            sx={{ height: 115 }}
                                            image={sample_product}
                                            title="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                                            9.000.000 VND
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                        <Grid container justify="center">
                                            <Button variant="contained" color="primary" sx={{margin:'auto'}}>
                                                Lazada
                                            </Button>
                                        </Grid>
                                        </CardActions>
                                    </Card>
                            </Grid>
                            <Grid item xs={12} md={1} lg={3}>
                            <Card maxWidth="sx" textAlign='center'>
                                        <CardMedia
                                            sx={{ height: 115 }}
                                            image={sample_product}
                                            title="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                                            9.000.000 VND
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                        <Grid container justify="center">
                                            <Button variant="contained" color="primary" sx={{margin:'auto'}}>
                                                Shopee
                                            </Button>
                                        </Grid>
                                        </CardActions>
                                    </Card>
                            </Grid>
                            <Grid item xs={12} md={1} lg={3}>
                            <Card maxWidth="sx" textAlign='center'>
                                <CardMedia
                                    sx={{ height: 115 }}
                                    image={sample_product}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                                    9.000.000 VND
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                <Grid container justify="center">
                                    <Button variant="contained" color="primary" sx={{margin:'auto'}}>
                                        Tiki
                                    </Button>
                                </Grid>
                                </CardActions>
                            </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </Container>
              </Grid>
              {/* Phần các sản phẩm tương tự*/}
              <Grid justifyItems={"center"} item xs={12} sx={{p:2}} >
                  <Typography variant='h6' textAlign={'center'} color={'blueviolet'} marginBottom={'10px'} fontWeight={700}>
                    Các sản phẩm tương tự
                  </Typography>
              </Grid>

              <Grid item xs={12}> 
                <Container sx={{ p: -2, display: 'flex', flexDirection: 'column' }}>
                  <Container>
                    <div class="main">
                      <div class = "item">
                        <Grid container spacing={0}>
                          <Grid item xs md={1} lg={2} border={1} justifyItems={'center'} alignItems={'center'} height={100}> 
                            <Item>
                                <img src={sample_product} width={80} height={80} align={'center'} justify={'center'}></img>
                                <Typography variant='body2' color={'black'} textAlign={'center'} justify={'center'}>shopee.vn</Typography>
                            </Item>                     
                          </Grid>

                          <Grid item xs={8} border={1}> 
                            <Typography variant='body2' textAlign={'center'} margin={'auto'}>Dep clog</Typography>
                            <p>- Chất liệu: Clog có thể được làm từ nhiều loại chất liệu khác nhau như da, nhựa, gỗ, vải, và cao su.</p>
                          </Grid>

                          <Grid item xs border={1} justify="center" textAlign="center">
                            <Grid container justify="center" textAlign="center" sx ={{marginTop: 0}}>    
                              <Typography variant='body2' textAlign={'center'} margin={'auto'} color={'red'}>9.000.000 VND</Typography>
                              <br></br> <br></br>                                
                            <Button variant="contained" color="primary" sx={{margin:'auto'}}>
                                        Xem ngay
                            </Button>
                            </Grid>
                          </Grid>
                        </Grid>                                
                      </div>
                    </div>
                  </Container>
                </Container>
              </Grid>
              {/** */}

              <ProductList/>
            


            </Grid>              
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
    </ThemeProvider>
  );
}