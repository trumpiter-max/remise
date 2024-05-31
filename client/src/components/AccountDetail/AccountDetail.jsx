import React, { useEffect, useState } from "react";
import { Link, Paper, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { getUser } from "../../api/userapi";

export default function AccountDetail(){
    // const username=localStorage.getItem('username');
    const name=localStorage.getItem('name');
    // const email=localStorage.getItem('email');
    const phone=localStorage.getItem('phone');
    const address=localStorage.getItem('address');
    const [user, setUser]=useState(null)
    const [error, setError]= useState(null)
    useEffect(()=>{
        const fetchUser= async()=>{
          try{
            const response = await getUser();
            if (response != 200){
              throw new Error('Network response was not ok');
            }
            setUser(response);
          } catch(error){
            setError(error);
          }
        };
        fetchUser();
      },[])

    return(
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography textAlign={'left'}><h3>Personal information</h3></Typography>
                <div style={{display:'absolute', top:0, right:0}}>
                <Button style={{ height: 40}}>
                    <Link href = "/editaccount"  sx={
                        {textDecoration: 'none'}
                    }>Chỉnh sửa thông tin người dùng</Link>
                </Button>
                </div>
            </div>
            <form>
                <table class="table_infor">
                    <tr className="row1">
                        <td className="usernameLabel" 
                            style={{paddingTop: 30,
                                    textAlign: "right"}}>
                            <label>Tên đăng nhập</label>
                        </td>

                        <td className="usernameInput"style={{paddingTop: 30}}>
                            <label style={{height: 40}}>{(user)?`${user.username}`:''}</label>
                        </td>
                    </tr>
                    <tr>
                    <td 
                        style={{paddingTop: 20,
                                textAlign: "right"}}>
                            <label>Tên</label>
                        </td>

                        <td style={{paddingTop: 20}}>
                        <label style={{height: 40, textAlign:"left"}}>{name?`${name}`:''} </label>
                        </td>
                    </tr>
                    <tr className="email">
                    <td 
                        style={{paddingTop: 20,
                                textAlign: "right"}}>
                            <label>Email</label>
                        </td>
                        <td style={{paddingTop: 20, textAlign:"left"}}>
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

