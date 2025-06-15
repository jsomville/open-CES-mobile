const PRD_URL = "https://open-ces-production.up.railway.app";
const LOCAL_URL = "http://192.168.2.200:3000";
const ENV = "LOCAL"

export const getBaseURL = () => {
    let base_url = LOCAL_URL;
    if (ENV === "PRD"){
        base_url = PRD_URL;
    }
    return base_url;
}