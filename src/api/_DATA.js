import axios from "axios";

export const api = axios.create({
    baseURL: "https://pivot-access-users.herokuapp.com/v1/"
});