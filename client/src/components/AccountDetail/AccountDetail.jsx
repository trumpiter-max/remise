import React from "react";
import { useState, useEffect } from 'react';
import { Link, Paper, Typography } from "@mui/material";
import Button from "@mui/material/Button";

export default function AccountDetail(){
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
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography textAlign={'left'}><h3>Thông tin cá nhân của tôi</h3></Typography>
                <Button style={{ height: 40, width: 120, marginLeft: 400 }}>
                    <Link href = "/editaccount" sx={
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
                            <label style={{height: 40, width: 350, paddingRight: 400}}>username</label>
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
                        <label style={{height: 40, width: 350, paddingRight: 400, textAlign:"left"}}>Trần Văn A</label>
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
                            username@gmail.com&nbsp; 
                                                                       
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
                            01233462877&nbsp; 
                                                                         
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
                            <input type="radio" name="gender" id="female" value="Nữ" checked={selectedGender === "Nữ"}></input>
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
                            <label style={{height: 40, width: 80}}>12/</label>
                            <span style={{paddingRight: 30}}></span>

                            <label style={{height: 40, width: 80}}>4/</label>
                            
                            <span style={{paddingRight: 30}}></span>
                        
                            <label style={{height: 40, width: 80}}>1994</label>
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
                        <label style={{height: 40, width: 350, paddingRight: 300}}>Thành phố Hồ Chí Minh </label> 
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

