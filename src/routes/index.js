import { useAuthState } from "../stores/AuthStore";
import { Navigate } from 'react-router-dom';
export const PrivateRoute = ({ children }) => {
    const auth = useAuthState();
    return auth.isLoggedIn.get() === true ? children : <Navigate to="/login" />;
}