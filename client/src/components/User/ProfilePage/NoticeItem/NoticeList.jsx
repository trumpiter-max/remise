import React from 'react'
import { Grid } from '@mui/material'
import NoticeItem from './NoticeItem'


function NoticeList(notifications) {
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