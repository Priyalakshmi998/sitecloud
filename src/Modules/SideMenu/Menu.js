import React, { useState } from "react";
import { Layout, Menu } from 'antd';

import Navbar from "../Navbar/NavBar";
import {
    ArrowLeftOutlined, SettingOutlined, UserOutlined,
    UnorderedListOutlined,
    FileTextOutlined,
    CalendarOutlined, ClockCircleOutlined, PlusSquareOutlined, NodeExpandOutlined, FieldTimeOutlined, ExclamationCircleOutlined
} from '@ant-design/icons';
import "antd/dist/antd.css";
import ManageSite from "../Maps/ManageSite";
import Live from "../Attendence/Live";

function SideNav() {

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
                <Sider width={280}
                    collapsible
                    collapsed={collapsed}
                    onCollapse={onCollapse}
                    theme="light"
                    className="site-layout-background"
                >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['2']}
                        // defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item key="1" icon={<ArrowLeftOutlined />} title="Site 1">
                            Site 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<SettingOutlined />} title="Manage Site" >
                            Manage Site
                        </Menu.Item>
                       
                        <SubMenu key="3" icon={<UserOutlined />} title="Attendnce">
                            <Menu.Item icon={<ClockCircleOutlined />} key="12">Live Attendence</Menu.Item>
                            <Menu.Item key="13" icon={<NodeExpandOutlined />}>Daily Attendence</Menu.Item>
                            <Menu.Item key="14" icon={<FieldTimeOutlined />}>Attendence History</Menu.Item>
                            <Menu.Item key="15" icon={<FieldTimeOutlined />}>Manual Sign-In</Menu.Item>
                         
                        </SubMenu>
                        <Menu.Item key="4" icon={<UnorderedListOutlined />} title="Inductions">
                            Inductions
                        </Menu.Item>
                        <Menu.Item key="5" icon={<CalendarOutlined />} title="Pre-Start and Daily Briefing">
                            Pre-Start and Daily Briefing
                        </Menu.Item>
                        <Menu.Item key="6" icon={<PlusSquareOutlined />} title="Safety and Notices">
                            Safety and Notices
                        </Menu.Item>
                        <Menu.Item key="7" icon={<FileTextOutlined />} title="Safety work Method statements">
                            Safety work Method statements
                        </Menu.Item>
                        <SubMenu key="8" icon={<FileTextOutlined />} title="Site Permits">
                            <Menu.Item icon={<ClockCircleOutlined />} key="9">Pending Approval</Menu.Item>
                            <Menu.Item key="10" icon={<NodeExpandOutlined />}>Manage Permits</Menu.Item>
                            <Menu.Item key="11" icon={<FieldTimeOutlined />}>Permit History</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="Manage Site" icon={<ExclamationCircleOutlined />} title="Manage Site">
                            Hazard and Issues
                        </Menu.Item>
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
                        <Live></Live>
                      
                    </Content>
                </Layout>

            </Layout>

        </>
    );
}
export default SideNav;