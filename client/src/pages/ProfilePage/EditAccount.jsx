import React, { useState } from "react";
import { Badge, Input, Paper, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import './ProfilePage.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { Stack} from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { putUser } from "../../api/userapi";

function EditAccountDetail(){

    const username=localStorage.getItem('username');
    const name=localStorage.getItem('name');
    const email=localStorage.getItem('email');
    const phone=localStorage.getItem('phone');
    const address=localStorage.getItem('address');
    const [username1, setUserName]= useState(username);
    const [name1, setName]= useState(name);
    const [email1, setEmail]= useState(email);
    const [phone1, setPhone]= useState(phone);
    const [address1, setAddress1]= useState(address);
    const navigate=useNavigate();
    const handleSave = async () => {
        const updatedProfile = {
            username1,
            name1,
            email1,
            phone1,
            address1
        };
        try {
            const response = await putUser(updatedProfile);
            const {message}=response;
            if(message.msgBody){
                throw new Error("Fail to update!");
            }
            console.log(updatedProfile);
            if (username1)localStorage.setItem('username', username1);
            if (name1) localStorage.setItem('name', name1);
            if (email1) localStorage.setItem('email', email1);
            if (phone1) localStorage.setItem('phone', phone1);
            if (address1) localStorage.setItem('address', address1);
        } catch(error){
            throw new Error("Fail to save user information!", error);
            
        }
        
        
        navigate('/account');
    };

    return(
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <form>
                <table className="table_infor">
                    <tr className="row1">
                        <td 
                            style={{
                                paddingTop: 20,
                                textAlign: "right",
                                minWidth: '100px'
                            }}
                        >
                            <label>Tên đăng nhập: </label>
                        </td>
                        <Input 
                            className="usernameLabel"
                            style={{paddingTop: 30, textAlign:'left'}}
                            defaultValue={(username)?`${username}`:''}
                            onChange={(e)=>setUserName(e.target.value)}
                        />
                    </tr>
                    
                    <tr>
                        <td 
                            style={{
                                paddingTop: 20,
                                textAlign: "right"
                            }}
                        >
                            <label>Tên:</label>
                        </td>
                        <td style={{paddingTop: 20}}>
                            <Input defaultValue={(name)?`${name}`:''}  onChange={(e)=>setName(e.target.value)}/>
                        </td>
                    </tr>
                    <tr className="email">
                        <td 
                            style={{
                                paddingTop: 20,
                                textAlign: "right"
                            }}
                        >
                            <label>Email: </label>
                        </td>
                        <td>
                            <Input defaultValue={(email)?`${email}`:''}  onChange={(e)=>setEmail(e.target.value)}/>
                        </td>
                    </tr>
                    
                    <tr className="sdt">
                        <td 
                            style={{
                                paddingTop: 20,
                                textAlign: "right"
                            }}
                        >
                            <label>Số điện thoại: </label>
                        </td>
                        <td>
                            <Input defaultValue={(phone)?`${phone}`:''}  onChange={(e)=>setPhone(e.target.value)}/>
                        </td>
                    </tr>
                    <tr className="address">
                        <td 
                            style={{
                                paddingTop: 20,
                                textAlign: "right"
                            }}
                        >
                            <label>Địa chỉ: </label>
                        </td>
                        <td style={{paddingTop: 20, textAlign:"left"}}>
                            <Input defaultValue={(address)?`${address}`:''} onChange={(e)=>setAddress1(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td></td>              
                    </tr>
                </table>
                <Button onClick={handleSave}>Save</Button>
            </form>
        </Paper>
    );
}

export default function EditAccount(){
    const username=localStorage.getItem('username');
    return(
        <div className='profile'>
            <div className='left-side-bar'>
                <div className='username left-side-bar-item'>
                    <AccountCircleIcon color='primary'/>
                    <h7>{username||'Username'}</h7>
                </div>
                <div className='account left-side-bar-item'>
                    <AccountCircleIcon color='primary'/>
                    <h7><Typography variant ="h7" color = "red">Tài khoản</Typography></h7>          
                </div>
                <div className='notice left-side-bar-item'>
                <Badge badgeContent={0} color="secondary">
                    <CircleNotificationsIcon color='primary' />
                    </Badge>
                    <Link href='/notice' sx={{textDecoration:'none', color:'black', ml:1}} ml={1}>Thông báo</Link>
                </div>
            </div>
            <div className='profile-body'>
                <Stack spacing={2}>
                    <EditAccountDetail/>
                </Stack>
            </div>
        </div>
    );

}