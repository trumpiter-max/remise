import axiosClient from './axiosClient';

export const login = async (user) => {
  try {
    const response = await axiosClient.post("/authentication/login", user);
    if (response.status === 200) {
      localStorage.setItem('currentUser', JSON.stringify(response.data));
      // localStorage.setItem('token', response.data);
      return {
        message: {
          msgBody: 'Sign in successfully',
          msgError: false,
        },
        response
      }
    }
  } 
  catch (error) {
    return {
      message: {
        msgBody: error.message,
        msgError: true,
      },
    };
  }
};

export const logout = async (user) => {
  try {
    const response = await axiosClient.post("/authentication/logout", user);
    
    // Check if the response is successful
    if (response.status === 200) {
      // Save the user data to localStorage for fast authentication
      localStorage.setItem('currentUser', JSON.stringify(response.data));
      // localStorage.setItem('token', response.data);
      return {
        message: {
          msgBody: 'Logout successfully',
          msgError: false,
        },
        response
      }
    } else {
      throw new Error('Log out failed');
    }
  } 
  catch (error) {
    return {
      message: {
        msgBody: error.message,
        msgError: true,
      },
    };
  }
};
