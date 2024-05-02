import { useContext } from "react";
import { AuthContext } from "../context";

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    const { auth, setAuth } = context;
    return { auth, setAuth };

}

export default useAuth;