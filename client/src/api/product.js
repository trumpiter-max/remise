import axiosClient from "./axiosClient";
import axios from 'axios';

const cache = new Map();

export const getFlashSaleProduct = async () => {
    try {
        if (cache.has("/management/products")) {
            return cache.get("/management/products");
        }

        const response = await axiosClient.get("/management/products");
        cache.set("/management/products", response.data);
        return response.data;
    } catch (err) {
        console.log('Error fetching flash sale products:', err);
        throw err;
    }
}

export const getDetailProduct = async (id) => {
    try {
        const url = `/management/products/${id}`;

        if (cache.has(url)) {
            return cache.get(url);
        }

        const response = await axiosClient.get(url);
        cache.set(url, response.data);
        return response.data;
    } catch (err) {
        console.log('Error fetching detail product:', err);
        throw err;
    }
}
