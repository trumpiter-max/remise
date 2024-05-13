// userapi.js

import axiosClient from './axiosClient';

export const login = async (user) => {
  try {
    const response = await axiosClient.post("/authentication/login", user);
    const storeUser=localStorage.setItem('currentUser',true);
    return {
      message:{
        msgBody:'Đăng nhập thành công',
        msgError:false,
      },
      response
    }
  } 
  catch (error) {
    return {
      message: {
        msgBody: 'Đăng nhập không thành công',
        msgError: true,
      },
      // error,
    };
  }
};
