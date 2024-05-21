import React from 'react'
import { Grid } from '@mui/material'
import NoticeItem from './NoticeItem'
import { useDispatch, useSelector } from 'react-redux';


function NoticeList() {
  const notifications = useSelector((state) => state.notifications);
  console.log("DS: ",notifications);
  if(!notifications) return(<div></div>)
  return (
    <Grid container spacing={1}>
        {notifications.map((noticeItem) => (
          <Grid item xs={12}>
            <NoticeItem noticeItem={noticeItem} />
          </Grid>
        ))}
    </Grid>
  )
}

export default NoticeList