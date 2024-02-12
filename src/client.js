import axios from "axios";

const client = (token) => {
    const ENDPOINT = import.meta.env.VITE_ENDPOINT

    if (!ENDPOINT) {
        console.error('Endpoint is not exist')
        return
    }
    
    const config = {
        baseURL: ENDPOINT,
        headers: {
            "Content-Type" : `applicaiton/json;charset=UTF-8`,
            "Accept" : "application/json",
            "Access-Control-Allow-Origin": `http://localhost:5173`,
            'Access-Control-Allow-Credentials':"true",
        }  
    }

    if (token) {
        config["headers"]["Authorization"] = "Bearer " + token
    }

    return axios.create(config)
}

export default client
