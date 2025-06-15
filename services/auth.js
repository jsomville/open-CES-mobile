import axios from 'axios';
import { getBaseURL } from "./config"

//const BASE_URL = "https://open-ces-production.up.railway.app";
const BASE_URL = getBaseURL();

export const login = async (email, password) => {

    const payload = {
        username : email,
        password,
    }

    const headers = {
      'Content-Type': 'application/json',
    };

    const url = `${BASE_URL}/api/idp/login`

    const response = await axios.post(url, payload, {headers});

  return response;
};

export const checkIsAuth = () =>{
    if (!global.token){
        console.log("no token");
        return false;
    }
    if (!global.email){
        console.log("no email");
        return false;
    }

    return true;
}