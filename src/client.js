import axios from "axios";

const client = (token) => axios.create({
    baseURL: "http://develop.moa-moa.site/api" ,
    headers: {
        "Content-Type" : `applicaiton/json;charset=UTF-8`,
        "Accept" : "application/json",
        "Authorization": "Bearer " + token,

        "Access-Control-Allow-Origin": `http://localhost:5173`,
        "Access-Control-Allow-Credentials" : "true",
    }
}) ;

export default client