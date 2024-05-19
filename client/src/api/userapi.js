//
import axiosClient from './axiosClient';
export const register =async (user)=>{
    try {
        // const response = await axiosClient.post("/signup", user);
        const response = await axiosClient.post("/authentication/register", user);
        return response.data;
    } catch (err) {
        return {
            message: {
                msgBody: "Register failed, please try again",
                msgError: true,
            },
            err,
        };
    }
}

