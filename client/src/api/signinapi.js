// userapi.js

import axiosClient from './axiosClient';

export const login = async (user) => {
  try {
    const response = await axiosClient.get("/posts", user);
    return response.data;
  } catch (error) {
    return {
      message: {
        msgBody: 'Đăng nhập không thành công',
        msgError: true,
      },
      error,
    };
  }
};
