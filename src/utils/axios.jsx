import axios from "axios";

const instance = axios.create({
    baseURL : "https://warner-and-spencer-shoes.onrender.com/ "
})

export default instance;