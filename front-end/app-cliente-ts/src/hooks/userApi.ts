import axios from "axios";
import { Buffer } from 'buffer';
import { User } from "../types/User";

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
        const storageData = localStorage.getItem('authToken');
        const response = await api.post('/users', {
            username, password, email
        },
        {
            headers: {
                Authorization: "Bearer " + storageData                                    
            }
        }
        )
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
    },

    //Users
    findAllUsers: async () => {
        try {
            const storageData = localStorage.getItem('authToken');
            const response = await api.get('/users', {

                headers: {
                    Authorization: "Bearer " + storageData                                    
                }
            },)
            return response.data
            
        } catch (error) {
            return error
        }
    },


    //Employees

    createEmployee: async (first_name: string, last_name: string, cpf: string, user:User) => {
        try {
            const storageData = localStorage.getItem('authToken');
            const response = await api.post('/employee', {

                headers: {
                    Authorization: "Bearer " + storageData                                    
                }
            },)
            return response.data
        } catch (error) {
            return error
        }
    },

    findByNameEmployee: async (name: string) => {
        try {
            const storageData = localStorage.getItem('authToken');
            const response = await api.get('/employee/' +name, {

                headers: {
                    Authorization: "Bearer " + storageData                                    
                }
            },)
            return response.data
        } catch (error) {
            return error
        }
    },
    

    //Company
    findAllCompany: async () => {
        try {
            const storageData = localStorage.getItem('authToken');
            const response = await api.get('/company', {

                headers: {
                    Authorization: "Bearer " + storageData                                    
                }
            },)
            return response.data
        } catch (error) {
            return error
        }
    },

    //Products
    findAllProduct: async () => {
        try {
            const storageData = localStorage.getItem('authToken');
            const response = await api.get('/product', {

                headers: {
                    Authorization: "Bearer " + storageData                                    
                }
            },)
            return response.data
            
        } catch (error) {
            return error
        }
    },

    findProduct: async (id:number) => {
        try {
            const storageData = localStorage.getItem('authToken');
            const response = await api.get('/product/'+id, {

                headers: {
                    Authorization: "Bearer " + storageData                                    
                }
            },)
            return response.data
            
        } catch (error) {
            return error
        }
    }

})

