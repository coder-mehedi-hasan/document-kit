import axios from 'axios'

export const get = (url: string) => {
    const res = axios.get(url);
    return res;
}

export const post = (url: string, data: any) => {
    const res = axios.post(url, data);
    return res;
}
export const patch = (url: string) => {
    const res = axios.get(url);
    return res;
}

export const remove = (url: string) => {
    const res = axios.get(url);
    return res;
}
