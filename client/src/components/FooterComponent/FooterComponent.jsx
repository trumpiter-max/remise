import React from 'react'
import logo from '../../resources/images/logo_remise.png'
import './FooterComponent.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
function FooterComponent() {
  return (
        <div id='footer'>
            <hr></hr>
            <div className='footer-introduction'>
                <img className='logo item' src={logo} alt='logo'></img>
                <h5 className='item'>CÔNG TY CỔ PHẦN SO SÁNH VIỆT NAM</h5>            </div>
            <div className='footer-help'>
                <h5>HỖ TRỢ KHÁCH HÀNG</h5>
                <h8>Các câu hỏi thường gặp</h8>
                <h8>Miễn trừ trách nhiệm</h8>
            </div>
            <div className='footer-contact'>
                <h5>THÔNG TIN LIÊN HỆ</h5>
                <div style={{justifyContent:'center', display:'flex'}}>
                    <FacebookIcon color='primary'></FacebookIcon>
                    <a href='https://www.facebook.com/' style={{marginLeft:'4px'}}>facebook.com</a>
                </div>
                <div style={{justifyContent:'center', display:'flex'}}>
                    <LocalPhoneIcon></LocalPhoneIcon>
                    <h8>+8433456789</h8>
                </div>
            </div>
        </div>
  )
}

export default FooterComponent