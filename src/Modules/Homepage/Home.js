import React, { useState } from "react";
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router';
import Navbar from "../Navbar/NavBar";
import {
    ArrowLeftOutlined, SettingOutlined, UserOutlined,
    UnorderedListOutlined,
    FileTextOutlined,
    CalendarOutlined, ClockCircleOutlined, PlusSquareOutlined, NodeExpandOutlined, FieldTimeOutlined, ExclamationCircleOutlined
} from '@ant-design/icons';
import "antd/dist/antd.css";
import ManageSite from "../Maps/ManageSite";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Home() {
    let navigate = useNavigate();
    const { SubMenu } = Menu;
    const { Header, Content, Sider } = Layout;
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = (collapsed) => {
        setCollapsed(collapsed);
    };

    // let navigate = useNavigate();
    return (
        <>
            <Navbar />

            <Layout style={{ minHeight: "100vh" }}>
                <Sider width={320}
                   
                    theme="light"
                    className="site-layout-background"
                >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['2']}
                        // defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <div className =" font-semibold cursor-pointer">
                          
                        <p className="mt-5 py-5 px-8 border-b  hover:bg-blue-600 hover:text-white" onClick={() => { navigate("/site_setup") }}>Map View</p>
                        <p className="px-6 py-4 border-b hover:bg-blue-600 hover:text-white "  onClick={() => { navigate("/managesite") }}>Site 1: Melbourne F1 Track</p>
                        <p className="px-6 py-4 border-b hover:bg-blue-600 hover:text-white">Site 2: Road Construction, Footscary</p>
                        <p className="px-6 py-4 border-b hover:bg-blue-600 hover:text-white">Site 3: Pathway Construction, Cliftonhil.. </p>
                        <p className="px-6 py-4 border-b hover:bg-blue-600 hover:text-white">Site 4: Chemical Factory, Richmond</p>
                        <p className="px-6 py-4 border-b hover:bg-blue-600 hover:text-white">Site 5: Powerhouse, High Street</p>
                        <p className="px-6 py-4 border-b hover:bg-blue-600 hover:text-white">Site 6: Iron Core mining, Kingston city</p>
                        </div>
                    </Menu>
                </Sider>

                <Layout >
                    <Content
                        className="site-layout-background"
                        style={{
                            // padding: 24,
                            // margin: 0,
                            background: "#E5E5E5"
                        }}
                    >
                        {/* <Live></Live> */}
                        {/* <Daily></Daily>
                        <History></History>
                        <Popup></Popup>
                        <Test></Test> 
                        <Signin></Signin> */}
                        
                    </Content>
                </Layout>

            </Layout>

        </>
    );
}
export default Home;