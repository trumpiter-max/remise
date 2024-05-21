import { Button, Grid } from '@mui/material';
import React, { useState } from 'react'

function Slider({images}) {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevSlide = () => {
      setIndex((prevIndex) => (prevIndex + images.length - 1) % images.length);
    };
  
    return (
      <Grid display={'flex'} justifyContent={'center'} flexDirection={'column'}>
        <Grid mr={'5'} ml={'5'}>
            <img src={images[index]} alt="Slide" style={{ width: 'auto', maxHeight:'300px', minHeight:'200px', maxWidth:'60%', borderRadius:'4px'}} />
        </Grid>
        <Grid>
        <Button onClick={prevSlide}>Trang Trước</Button>
        <Button onClick={nextSlide}>Trang Sau</Button>
        </Grid>
      </Grid>
    );
}

export default Slider