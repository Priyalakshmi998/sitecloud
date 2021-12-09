import { Navigate, Outlet } from "react-router-dom";
import Navbar from '../Navbar/NavBar';
import SideNav from "../SideMenu/Menu";

const useAuth = () => {
    const user = { loggedIn: true };
    return user && user.loggedIn;
};

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ?
        <>
            {/* Header */}
            <Navbar />
            <span className="float_left" >
                {/* side menu */}
                <SideNav />
            </span>

            <Outlet />

        </>
        : <Navigate to="/" />;
};

export default ProtectedRoutes;