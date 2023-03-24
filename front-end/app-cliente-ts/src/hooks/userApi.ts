import axios from "axios";
import { Buffer } from 'buffer';

export const api = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API
})

//codificar o token
function toBase64(data: string): string {
    return Buffer.from(data).toString("base64");
};

export const useApi = () => ({
    validateToken: async (token: string) => {

        const response = await api.post('/token/validate', {
            //data
        },
            {
                headers: {
                    Authorization:
                        "Bearer " + token
                },
            });
        return response.data;
    },

    signup: async (username: string, password: string, email: string) => {
        const response = await api.post('/users', {
            username, password, email
        })
        return response.data;
    },

    signin: async (username: string, password: string) => {
        try {
            const response = await api.post('/token', {
                //data
            }, 
            {
                headers: {
                    Authorization:
                        "Basic " +
                        toBase64(`${username}:${password}`),
                    "content-type": "application/json"
                },
            }
            )
            return response.data
        } catch (error) {
            console.log(error);
        }
    },

    signout: async () => {
        //const response = await api.post('/logout')       
        return true
    }

})

