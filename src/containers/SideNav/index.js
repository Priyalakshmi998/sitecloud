import React from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import { ArrowLeftOutlined, SettingOutlined,UserOutlined,
    UnorderedListOutlined,
    FileTextOutlined,
    CalendarOutlined,ClockCircleOutlined,PlusSquareOutlined,NodeExpandOutlined,FieldTimeOutlined,ExclamationCircleOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import { useState, useEffect } from "react";
function SideNav(){
    
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const [collapsed, setCollapsed] = useState(false);
const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
};
return(
    <Layout style={{ minHeight: "100vh" }}>
        <Sider width={280} 
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        theme="light"
        className="site-layout-background">
            <Menu
            mode="inline"
            defaultSelectedKeys={['2']}
            // defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            >
            <Menu.Item key="1" icon={<ArrowLeftOutlined />} title="Site 1">
            Site 1
            </Menu.Item>
            <Menu.Item key="2" icon={<SettingOutlined />} title="Manage Site">
                Manage Site
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />} title="Attendnce">
                Attendnce
            </Menu.Item>
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
                <Menu.Item  icon={<ClockCircleOutlined />} key="9">Pending Approval</Menu.Item>
                <Menu.Item key="10" icon={<NodeExpandOutlined />}>Manage Permits</Menu.Item>
                <Menu.Item key="11"  icon={<FieldTimeOutlined />}>Permit History</Menu.Item>
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
                padding: 24,
                margin: 0,
                background:"#E5E5E5"
            }}
            >
            Content
            </Content>
        </Layout>
        
    </Layout>
);
}
export default SideNav;