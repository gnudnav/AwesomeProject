import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.60:3000/',
    headers: {
        'Content-Type': 'application/json',
    },
});
export const registerUser = async ({ name, email, password, phone }) => {
    const response = await api.post('/userRouter/register', { name, email, password, phone });
    return response.data;
};


export const loginUser = async ({ email, password }) => {
    const response = await api.post('/userRouter/login', { email, password });
    return response.data;
};
export const listProduct = async () => {
    const response = await api.get('/productRouter/listDS');
    return response.data;
};
export const listProductByType = async (typeName) => {
    const response = await api.post('/productRouter/listDsByType', { typeName });
    return response.data;
};
export const listProductByCate = async (cateName) => {
    const response = await api.post('/productRouter/listDsByCate', { cateName });
    return response.data;
}
export const listDsDetail = async (idProduct) => {
    const response = await api.get('/productRouter/listDsDetail', { params: { idProduct } })
    return response.data
}