import axiosClient from "./axiosClient";

export const getFlashSaleProduct=async()=>{
    try {
        // const response = await axiosClient.post("/signup", user);
        const response = await axiosClient.get("/productFlashSale");
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