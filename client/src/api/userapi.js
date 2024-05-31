//
import axiosClient from './axiosClient';
export const register =async (user)=>{
    try {
        // const response = await axiosClient.post("/signup", user);
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
        // return response.data;
    } catch (err) {
        return {
            message: {
                msgBody: "Register failed, please try again",
                msgError: true,
            },
        };
    }
}

export const putUser =async (user)=>{
    try {
        // const response = await axiosClient.post("/signup", user);
        const response = await axiosClient.put("/authentication/user", user);
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
        // const response = await axiosClient.post("/signup", user);
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