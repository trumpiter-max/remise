//
import axiosClient from './axiosClient';
export const register =async (user)=>{
    try {
        const response = await axiosClient.post("/authentication/register", user);
        if (response.status === 200 || response.status === 201) {
            return {
              message: {
                msgBody: 'Sign up successfully',
                msgError: false,
              },
              response
            }
          }
    } catch (err) {
        return {
            message: {
                msgBody: "Register failed, please try again",
                msgError: true,
            },
        };
    }
}

export const login = async (user) => {
    try {
      const response = await axiosClient.post("/authentication/login", user);
      if (response.status === 200) {
        localStorage.setItem('currentUser', JSON.stringify(response.data));
        localStorage.setItem('csrftoken', response.getCookieValue('csrftoken'));
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
        // localStorage.setItem('token', response.Cookies.get('csrftoken'));
        // localStorage.setItem('csrftoken', getCookieValue('csrftoken'));
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



export const putUser =async (user)=>{
    try {
        const response = await axiosClient.put("/authentication/user", JSON.stringify(user));
        return response.data;
    } catch (err) {
        return {
            message: {
                msgBody: "Update failed, please try again",
                msgError: true,
            },
            err,
        };
    }
}

export const getUser =async ()=>{
    try {
        const response = await axiosClient.get("/authentication/user");
        return response.data;
    } catch (err) {
        return {
            message: {
                msgBody: "Update failed, please try again",
                msgError: true,
            },
            err,
        };
    }
}

function getCookieValue(cookieName) {
  const name = cookieName + '=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return '';
}