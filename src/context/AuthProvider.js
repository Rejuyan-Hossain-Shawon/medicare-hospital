import { createContext } from "react";
import useFirebase from "../hooks/useFirebase"


export const AuthContext = createContext();
const AuthProvider = ({ children }) => {

    // getiing all function and valuees from firebase 
    const allContext = useFirebase();

    return (
        <div>
            <AuthContext.Provider value={allContext}>
                {children}
            </AuthContext.Provider>
        </div>
    );

}
export default AuthProvider;