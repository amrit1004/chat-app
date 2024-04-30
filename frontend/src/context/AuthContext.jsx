import { createContext } from "react";
export const AuthContext = createContext();
export const AuthContextProvider = ({children}) => {
    const [authUser, setAuthUser] = useState(localStorage.getItem('chat-user'|| null));
      
     return <AuthContext.Provider value = {{}}>
        {children}
     </AuthContext.Provider>
} //2:52:46