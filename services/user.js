import axios from 'axios';

import { getBaseURL } from "./config"

//const BASE_URL = "https://open-ces-production.up.railway.app";
const BASE_URL = getBaseURL();

export const getUserDetail = async (email) => {

    const url = `${BASE_URL}/api/user/by-email/${email}`
    //console.log(url);

    const headers = {
     //'Content-Type': 'application/json',
      'Authorization' : `Bearer ${global.token}`,
    };
    
    const response = await axios.get(url, { headers });
    //console.log("Status :" , response.status);

    return response;
};