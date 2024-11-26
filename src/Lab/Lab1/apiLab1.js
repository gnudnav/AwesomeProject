import axios from 'axios';

const api = axios.create({
    baseURL: 'https://vieclam.shop/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const registerUser = async ({ email, password, name }) => {
    const response = await api.post('/register.php', { email, password, name });
    return response.data;
};


export const loginUser = async ({ email, password }) => {
    const response = await api.post('/login.php', { email, password });
    return response.data;
};
export const listCategory = async () => {
    const response = await api.get('/list-category.php')
    return response.data
}
export const listProductByCateLab1 = async (id) => {
    const response = await api.get(`/list-product-by-cate.php?id=${id}`)
    // console.log(response);
    // console.log(id);
    return response.data
}
