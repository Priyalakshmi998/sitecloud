import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router"
import { Layout, Menu } from 'antd';
import {
    ArrowLeftOutlined, SettingOutlined, UserOutlined,
    UnorderedListOutlined,
    FileTextOutlined, LoginOutlined,
    CalendarOutlined, ClockCircleOutlined, PlusSquareOutlined, NodeExpandOutlined, FieldTimeOutlined, ExclamationCircleOutlined
} from '@ant-design/icons';
import { useMedia } from "react-use";
import "../sass/style.css"
import "antd/dist/antd.css";


function SideNav() {
    let navigate = useNavigate();


    const { SubMenu } = Menu;
    const { Header, Content, Sider } = Layout;
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = (collapsed) => {
        setCollapsed(collapsed);
    };

    const deviceWidth = useMedia("(min-width: 1024px)");

    useEffect(() => {
        if (deviceWidth == true) {
            //default sidebar open
            setCollapsed(false);
        } else {
            //<1024px close sidebar
            setCollapsed(true);
        }
    }, [deviceWidth]);

    return (
        <>
            <span className="sidebar_menu" style={{ minHeight: "100vh", height: '100%' }}>
                <Sider width={280}
                    collapsible
                    collapsed={collapsed}
                    onCollapse={onCollapse}
                    theme="light"
                    className="site-layout-background"
                    style={{ minHeight: "100vh", height: '100%' }}
                >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['2']}
                        // defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    />
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['2']}
                        // defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item key="1" icon={<ArrowLeftOutlined />} title="Site 1">
                            Site 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<SettingOutlined />} title="Manage Site" onClick={() => navigate("/managesite")}>
                            Manage Site
                        </Menu.Item>

                        <SubMenu key="3" icon={<UserOutlined />} title="Attendnce">
                            <Menu.Item key="12" icon={<ClockCircleOutlined />} onClick={() => navigate("/live_attendence")}
                            >Live Attendence</Menu.Item>
                            <Menu.Item key="13" icon={<CalendarOutlined />} onClick={() => navigate("/daily_attendence")}>Daily Attendence</Menu.Item>
                            <Menu.Item key="14" icon={<FieldTimeOutlined />} onClick={() => navigate("/attendence_history")} >Attendence History</Menu.Item>
                            <Menu.Item key="15" icon={<LoginOutlined />}  onClick={() => navigate("/manual_signin")} >Manual Sign-In</Menu.Item>

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
            </span>

        </>
    );
}
export default SideNav;