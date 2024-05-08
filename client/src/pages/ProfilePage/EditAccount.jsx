import React from "react";
import { Paper, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import './ProfilePage.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { useState, useEffect } from "react";
import { Stack} from '@mui/material';

function EditAccountDetail(){

    const [selectedGender, setSelectedGender] = useState('');

    useEffect(() => {
        // Retrieve the selected gender from localStorage when the component mounts
        const storedGender = localStorage.getItem('selectedGender');
        if (storedGender) {
            setSelectedGender(storedGender);
        }
    }, []);

    const handleRadioChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedGender(selectedValue);
        // Store the selected gender in localStorage
        localStorage.setItem('selectedGender', selectedValue);
    };

    return(
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography textAlign={'left'}><h3>Thông tin cá nhân của tôi</h3></Typography>
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
                            <input type="text" value = {' Usename'} style={{height: 40, width: 350}}></input>
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
                            <input type="text" value = {' Trần Văn A'} style={{height: 40, width: 350}}></input>
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
                            <input type="text" value = {' Email'} style={{height: 40, width: 350}}></input>                                          
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
                            <input type="text" value = {' 0983672918'} style={{height: 40, width: 350}}
                            />
                                                               
                        </td>
                    </tr>

                    <tr className="gioitinh">
                    <td 
                        style={{paddingTop: 20, 
                                paddingRight: 60, 
                                paddingLeft: 90,
                                textAlign: "right"}}>
                            <label>Giới tính</label>
                        </td>
                        <td style={{ paddingTop: 20, textAlign: "left" }}>
                            <input type="radio" name="gender" id="male" value="Nam" checked={selectedGender === "Nam"} onChange={handleRadioChange}></input>
                            <label style={{ paddingRight: 50 }} htmlFor="male">Nam</label>
                            <input type="radio" name="gender" id="female" value="Nữ" checked={selectedGender === "Nữ"} onChange={handleRadioChange}></input>
                            <label htmlFor="female">Nữ</label>
                        </td>
                    </tr>

                    <tr className="dateofbirth">
                    <td 
                        style={{paddingTop: 20, 
                                paddingRight: 60, 
                                paddingLeft: 90,
                                textAlign: "right"}}>
                            <label>Ngày sinh</label>
                        </td>
                        <td style={{paddingTop: 20, textAlign:"left"}}>
                        <input list="listday" id="day" name="day" placeholer="Ngày" style={{height: 40, width: 80, textAlign: "center"}} />
                            <datalist id="listday" style={{ width: 10, backgroundColor: "white" }}>
                                <option value="1"></option><option value="2"></option><option value="3"></option>
                                <option value="4"></option><option value="5"></option><option value="6"></option>
                                <option value="7"></option><option value="8"></option><option value="9"></option>
                                <option value="10"></option><option value="11"></option><option value="12"></option>
                                <option value="13"></option><option value="14"></option><option value="15"></option>
                                <option value="16"></option><option value="17"></option><option value="18"></option>
                                <option value="19"></option><option value="20"></option><option value="21"></option>
                                <option value="22"></option><option value="23"></option><option value="24"></option>
                                <option value="25"></option><option value="26"></option><option value="27"></option>
                                <option value="28"></option><option value="29"></option><option value="30"></option>
                                <option value="31"></option>
                                </datalist>
    
                            <span style={{paddingRight: 30}}></span>

                            <input list="listmonth" id="month" name="month" placeholder="Tháng" style={{height: 40, width: 80, textAlign: "center"}} />
                            <datalist id="listmonth" style={{ width: 10, backgroundColor: "white" }}>
                                <option value="1"></option>
                                <option value="2"></option>
                                <option value="3"></option>
                                <option value="4"></option><option value="5"></option><option value="6"></option>
                                <option value="7"></option><option value="8"></option><option value="9"></option>
                                <option value="10"></option><option value="11"></option><option value="12"></option>
                                </datalist> 
                            <span style={{paddingRight: 30}}></span>
                        
                            <input type="text" placeholder="Năm" value="1994" style={{height: 40, width: 80, textAlign: "center"}} />
                            <span style={{paddingRight: 30}}></span>                            
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
                            <input type="text" value = " Thành phố Hồ Chí Minh" style={{height: 40, width: 350}}></input>  
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><Button style={{height: 40, width: 80}}>Lưu</Button></td>                        
                    </tr>
                </table>
            </form>
        </Paper>
    );
}

export default function EditAccount(){
    return(
        <div className='profile'>
      <div className='left-side-bar'>
        <div className='username left-side-bar-item'>
          <AccountCircleIcon color='primary'/>
          <h7>Username</h7>
        </div>
        <div className='account left-side-bar-item'>
          <AccountCircleIcon color='primary'/>
          <h7><Typography variant ="h7" color = "red">Account</Typography></h7>          
        </div>
        <div className='notice left-side-bar-item'>
          <CircleNotificationsIcon color='primary' />
          <h7>Notice</h7>
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