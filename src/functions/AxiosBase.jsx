import axios from "axios";
import formdata from "./Security";

export default function axiosBase() {
    const index = false;
    
    return axios.create({
        baseURL: !index ? 'http://localhost/Lion-Framework/Lion-PHP/api/' : 'https://leon.tecnologiayproductividad.com/'
    });
}

export async function get(url, jwt = null) {
    if(jwt != null) {
        return await axiosBase().get(url, { 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
        });
    } else {
        return await axiosBase().get(url);
    }
}

export async function post(url, data, jwt = null) {
    if(jwt != null) {
        return await axiosBase().post(url, formdata(data), { 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
        });
    } else {
        return await axiosBase().post(url, formdata(data));
    }
}

export async function put(url, jwt = null) {
    if(jwt != null) {
        return await axiosBase().put(url, { 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
        });
    } else {
        return await axiosBase().put(url);
    }
}

export async function deleted(url, jwt = null) {
    if(jwt != null) {
        return await axiosBase().delete(url, { 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
        });
    } else {
        return await axiosBase().delete(url);
    }
}