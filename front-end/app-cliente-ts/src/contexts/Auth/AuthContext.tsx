import { createContext } from "react";
import { User } from "../../types/User";

export type AuthContextType = {
    user: User | null;
    signin: (username: string, password: string) => Promise<boolean>;
    signup: (username: string, password: string, email: string) => Promise<boolean>
    signout: () => void;
}


const AuthContext = createContext<AuthContextType>(null!);


export default AuthContext