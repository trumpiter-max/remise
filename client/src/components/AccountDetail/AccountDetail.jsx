import React, { useEffect, useState } from "react";
import { Grid, Link, Paper, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { getUser } from "../../api/userapi";

export default function AccountDetail(){
    const name=localStorage.getItem('name');
    // const token=localStorage.getItem('token');
    const phone=localStorage.getItem('phone');
    // const username=localStorage.getItem('username');
    const address=localStorage.getItem('address');
    const [user, setUser]=useState({})
    const [error, setError]= useState(null)
    useEffect(()=>{
        const fetchUser= async()=>{
          try{
            const response = await getUser();
            console.log(response);
           
            setUser(response);
            localStorage.setItem("username",response.username);
            localStorage.setItem("email",response.email);
          } catch(error){
            setError(error);
          }
        };
        fetchUser();
      },[])

    return(
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Grid style={{ display: 'flex', alignItems: 'center' }}>
                <Typography textAlign={'left'}><h3>Personal information</h3></Typography>
                <Grid style={{display:'absolute', top:0, right:0}}>
                <Button style={{ height: 40, marginLeft:'20px'}} aria-label="edit-information-about-user">
                    <Link href = "/editaccount"  sx={
                        {textDecoration: 'none'}
                    }>CHỈNH SỬA</Link>
                </Button>
                </Grid>
            </Grid>
            <form>
                <table class="table_infor">
                    <tr className="row1">
                        <td className="usernameLabel" 
                            style={{textAlign: "right"}}>
                            <Typography>Tên đăng nhập</Typography>
                        </td>

                        <td className="usernameInput"style={{paddingTop: 30}}>
                            <Typography style={{height: 40, textWrap:"wrap"}}>{user.username}</Typography>
                        </td>
                    </tr>
                    <tr>
                    <td 
                        style={{
                                textAlign: "right"}}>
                            <Typography>Tên</Typography>
                        </td>

                        <td style={{paddingTop: 20}}>
                        <Typography>{name?`${name}`:''} </Typography>
                        </td>
                    </tr>
                    <tr className="email">
                    <td 
                        style={{paddingTop: 20,
                                textAlign: "right"}}>
                            <Typography>Email</Typography>
                        </td>
                        <td style={{paddingTop:20, textWrap:"wrap"}}>
                            {(user)?`${user.email}`:''}
                        </td>
                    </tr>
                    
                    <tr className="phonenumber">
                    <td 
                        style={{paddingTop: 20,
                                textAlign: "right"}}>
                            <label>Số điện thoại</label>
                        </td>
                        <td style={{paddingTop: 20, textAlign:"left"}}>
                            {phone?`${phone}`:''} 
                        </td>
                    </tr>
                    <tr className="address">
                    <td 
                        style={{paddingTop: 20,
                                textAlign: "right"}}>
                            <label>Địa chỉ</label>
                        </td>
                        <td style={{paddingTop: 20, textAlign:"left"}}>
                        <label style={{height: 40}}>{address?`${address}`:''}  </label> 
                        </td>
                    </tr>
                    <tr>
                        <td></td>              
                    </tr>
                </table>
            </form>
        </Paper>
    );
}

