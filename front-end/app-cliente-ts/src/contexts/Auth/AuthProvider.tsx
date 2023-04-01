import { useEffect, useState } from "react";
import { useApi } from "../../hooks/userApi";
import { User } from "../../types/User";
import AuthContext from "./AuthContext";

const AuthProvider = ({children}: {children: JSX.Element}) => {
    
    const api = useApi()
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>()

    useEffect(() => {
        const validateToken = async () => {
            const storageData = localStorage.getItem('authToken');
            if(storageData){
                const data = await api.validateToken(storageData);
                console.log(data.isToken)
                if(data.isToken){
                    setUser(data.isToken);
                }
            }
        }
        validateToken();
    }, [])

    const signin = async (username: string, password: string) =>{
        const data = await api.signin(username, password);

        try {
            if(data.user && data.jwt){
                setUser(data.user);
                setTokenLocalStore(data.jwt);  
                setToken(data.jwt);      
                    
                return true;
            }
        } catch (error) {
            console.log(error);
        }
     
        return false;
    }

    const signup = async (username: string, password: string, email: string) => {
        const data = await api.signup(username, password, email);

        try {
            if(data.user){                  
                return true;
            }
        } catch (error) {
            console.log(error);
        }
        console.log(data);
        return false
    }

    const signout = async () =>{
        setUser(null);
        removeTokenLocalStore();
        //await api.signout();
    }

    const setTokenLocalStore = (token:string) =>{
        localStorage.setItem('authToken', token);
    }

    const removeTokenLocalStore = () =>{
        localStorage.removeItem('authToken');
    }

    return(
        <AuthContext.Provider value={{user, signin, signout, signup}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider