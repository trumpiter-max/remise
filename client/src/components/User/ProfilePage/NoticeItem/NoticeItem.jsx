import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'

function NoticeItem({noticeItem}) {
  return (
    <Card sx={{display: 'flex'}}>
        <Box>
            <CardMedia
                component="img"
                height="50"
                width="100"
                src={noticeItem.thumbnailUrl}
                alt={noticeItem.name}
            />
        </Box>
        <Box ml={2}>
            <CardContent sx={{ height:40, padding:0, flexDirection:'column', display: 'flex'}}>
                <Typography gutterBottom color={'red'} variant="h8" component="div" sx={{border:0, textAlign:'left', mb:0}}>
                {noticeItem.shop}
                </Typography>
                <Typography variant="h8" color="text.primary" >
                {noticeItem.name}
                </Typography>
                <Typography variant="h8" color="text.secondary" sx={{border:0, textAlign:'left'}}>
                {noticeItem.price} VND
                </Typography>
            </CardContent>
        </Box>
      </Card>
  )
}

export default NoticeItem