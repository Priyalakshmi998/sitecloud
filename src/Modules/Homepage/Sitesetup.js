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
import Daily from "../Attendence/Daily";
import History from "../Attendence/History";
import Signin from "../Attendence/Signin";




function Sitesetup() {

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

            <Layout style={{ minHeight: "100vh" }} className="figma_font">
                <Sider width={360}
                   
                    theme="light"
                    className="site-layout-background"
                >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['2']}
                        // defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <div className ="mt-16 px-6 ">
                          
                        <p className="font-semibold text-lg">Setup a new site</p>
                        <hr></hr>
                        <div className="pt-16">
                        <label >Site Name <span className="text-red-400"><sup> *</sup></span></label>
                        <div className="pt-4">
                        <input type={Text}
                        className="border-2 border-gray-300 px-5 w-full py-2 bg-blue-100 rounded-sm"
                        ></input></div>
                        </div>
                        <div className="pt-8">
                        <label >Site Address <span className="text-red-400"><sup> *</sup></span></label>
                        <div className="pt-4">
                        <input type={Text}
                        className="border-2 border-gray-300 px-5 w-full py-2 bg-blue-100 rounded-sm"
                        ></input></div>
                        </div>
                        <div className="pt-10">
                        <button className="border-2 border-gray-300  w-full p-4 hover:bg-blue-700 hover:text-white rounded-sm text-center"> Set site boundary</button>
                        </div>
                        <div className="pt-8">
                        <p className="text-xs">Site boundary must be set before markup can be added.</p>
                        <button className="border-2 border-gray-300  w-full p-4 hover:bg-blue-700 hover:text-white rounded-sm text-center">Markup Site </button>
                        </div>
                        <div className="pt-8 flex px-3">
                        <div className="w-1/2"><button className="border bg-blue-500 hover:bg-blue-700 text-white font-bold w-full p-3  rounded-md text-center">Create site</button></div>
                        <div className="w-1/2"><button className=" w-full p-3  text-center text-blue-600">Cancel</button></div>
                        </div>
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
export default Sitesetup;