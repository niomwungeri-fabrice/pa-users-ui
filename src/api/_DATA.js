import axios from "axios";

export const api = axios.create({
    baseURL: "http://pivot-access-users.herokuapp.com/v1/"
});