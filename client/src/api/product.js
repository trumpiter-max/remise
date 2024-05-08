import axiosClient from "./axiosClient";

export const getFlashSaleProduct=async()=>{
    try {
        // const response = await axiosClient.post("/signup", user);
        const response = await axiosClient.get("/management/products");
        return response.data;
    } catch (err) {
        console.log()('Error fetching flash sale products:', err);
        throw err; // Ném lỗi để phần gọi biết
    }
}