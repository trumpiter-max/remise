//
import axiosClient from './axiosClient';
export const register =async (user)=>{
    try {
        // const response = await axiosClient.post("/signup", user);
        const response = await axiosClient.post("/posts", user);
        return response.data;
    } catch (err) {
        return {
            message: {
                msgBody: "Tao tai khoan khong thanh cong",
                msgError: true,
            },
            err,
        };
    }
}

