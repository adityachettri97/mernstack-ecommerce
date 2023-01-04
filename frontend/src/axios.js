import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3510",
});

export default instance;