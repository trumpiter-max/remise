import React from "react";
import { Paper, Typography } from "@mui/material";
import Button from "@mui/material/Button";
export default function AccountDetail(){
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
                            <input type="text" placeholder=" username" style={{height: 40, width: 350}}></input>
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
                            <input type="text" placeholder=" Trần Văn A" style={{height: 40, width: 350}}></input>
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
                            <a href="#">Thay đổi</a>                                              
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
                            <a href="#">Thay đổi</a>                                              
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
                        <td style={{paddingTop: 20, textAlign:"left"}}>
                            <input type="radio"></input> <label style={{paddingRight: 50}}>Nam</label> 
                            <input type="radio"></input> <label>Nữ</label>     
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
                        <input list="listday" id="day" name="day" placeholder="Ngày" style={{height: 40, width: 80, textAlign: "center"}} />
                            <datalist id="listday" style={{ width: 10, backgroundColor: "white" }}>
                                <option value="1"></option>
                                <option value="2"></option>
                                <option value="3"></option>
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
                        
                            <input type="text" placeholder="Năm" style={{height: 40, width: 80, textAlign: "center"}} />
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
                            <input type="text" style={{height: 40, width: 350}}></input>  
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

