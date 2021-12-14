import { Navigate, Outlet } from "react-router-dom";
import { Layout, Menu } from 'antd';
import Navbar from '../Navbar/NavBar';
import SideNav from "../SideMenu/Menu";

const useAuth = () => {
    const user = { loggedIn: true };
    return user && user.loggedIn;
};

const ProtectedRoutes = () => {


    const { Header, Content, Sider } = Layout;
    const isAuth = useAuth();
    return isAuth ?
        <>
            {/* Header */}
            <Navbar />

            <Layout style={{ minHeight: "100vh" }}>
                {/* side menu */}
                <SideNav />

                <Layout >
                    <Content
                        className="site-layout-background"
                        style={{
                            background: "#E5E5E5"
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </>
        : <Navigate to="/" />;
};

export default ProtectedRoutes;