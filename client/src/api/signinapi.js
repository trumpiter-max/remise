// userapi.js

import axiosClient from './axiosClient';

export const login = async (user) => {
  try {
    const response = await axiosClient.post("/authentication/login", user);
    return {
      message:{
        msgBody:'Đăng nhập thành công',
        msgError:false,
      }
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
