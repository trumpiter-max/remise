import React from "react";
import { Link, Paper, Typography } from "@mui/material";
import Button from "@mui/material/Button";

export default function AccountDetail(){
    const username=localStorage.getItem('username');
    const name=localStorage.getItem('name');
    const email=localStorage.getItem('email');
    const phone=localStorage.getItem('phone');
    const address=localStorage.getItem('address');

    return(
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography textAlign={'left'}><h3>Thông tin cá nhân của tôi</h3></Typography>
                <Button style={{ height: 40, width: 120, marginLeft: 400 }}>
                    <Link href = "/editaccount"  sx={
                        {textDecoration: 'none'}
                    }>Chỉnh sửa</Link>
                </Button>
            </div>
            <form>
                <table class="table_infor">
                    <tr className="row1">
                        <td className="usernameLabel" 
                            style={{paddingTop: 30, 
                                    paddingRight: 60, 
                                    paddingLeft: 90,
                                    textAlign: "right"}}>
                            <label>Tên đăng nhập</label>
                        </td>

                        <td className="usernameInput"style={{paddingTop: 30}}>
                            <label style={{height: 40, width: 350, paddingRight: 400}}>{username}</label>
                        </td>
                    </tr>
                    <tr>
                    <td 
                        style={{paddingTop: 20, 
                                paddingRight: 60, 
                                paddingLeft: 90,
                                textAlign: "right"}}>
                            <label>Tên</label>
                        </td>

                        <td style={{paddingTop: 20}}>
                        <label style={{height: 40, width: 350, paddingRight: 400, textAlign:"left"}}>{name}</label>
                        </td>
                    </tr>
                    <tr className="email">
                    <td 
                        style={{paddingTop: 20, 
                                paddingRight: 60, 
                                paddingLeft: 90,
                                textAlign: "right"}}>
                            <label>Email</label>
                        </td>
                        <td style={{paddingTop: 20, textAlign:"left"}}>
                            {email} 
                                                                       
                        </td>
                    </tr>
                    
                    <tr className="sdt">
                    <td 
                        style={{paddingTop: 20, 
                                paddingRight: 60, 
                                paddingLeft: 90,
                                textAlign: "right"}}>
                            <label>Số điện thoại</label>
                        </td>
                        <td style={{paddingTop: 20, textAlign:"left"}}>
                            {phone} 
                                                                         
                        </td>
                    </tr>
                    <tr className="address">
                    <td 
                        style={{paddingTop: 20, 
                                paddingRight: 60, 
                                paddingLeft: 90,
                                textAlign: "right"}}>
                            <label>Địa chỉ</label>
                        </td>
                        <td style={{paddingTop: 20, textAlign:"left"}}>
                        <label style={{height: 40, width: 350, paddingRight: 300}}>{address} </label> 
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

