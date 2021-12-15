import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../sass/style.css";
class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
    }
    componentDidMount() {
        fetch("https://run.mocky.io/v3/418be1f1-22e6-4927-bcc4-ea22c67fb2a8")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                });
            });
    }
    render() {
        let { items } = this.state;

        return (
            <>
            
            <div className="figma_font">  
                <section className="p-3 px-20">
                    <div className="bg-white  text-black  p-5 px-12 pb-10 shadow-2xl">

                        <div className="  flex flex-col justify-center items-center ">
                            <img
                                src="https://avatars.githubusercontent.com/u/1?v=4"
                                alt="Image"
                                className="rounded-full h-20 w-20 "
                            />
                            <p className="font-bold text-2xl pt-5" >Tester</p>


                        </div>
                        <hr></hr>
                        <p className="font-bold pt-3 pl-24">Passport:</p>
                        <hr></hr>
                        <div className="bg-gray-100  py-5 text-black">
                            <div className="flex">
                                <div className="w-1/2 pl-24">
                                    <p className="text-gray-400">Full Name</p>
                                    <p>Tester</p>
                                    <p><svg width="326" height="1" viewBox="0 0 326 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line y1="0.5" x2="326" y2="0.5" stroke="#8BA7D0" stroke-dasharray="5 5" />
                                    </svg>
                                    </p>
                                    <p className="text-gray-400"> Phone Number</p>
                                    <p>+91 9876543210</p>
                                    <p><svg width="326" height="1" viewBox="0 0 326 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line y1="0.5" x2="326" y2="0.5" stroke="#8BA7D0" stroke-dasharray="5 5" />
                                    </svg>
                                    </p>

                                </div>
                                <div className="w-1/2 pl-10">
                                    <p className="text-gray-400">Email</p>
                                    <p>tester@gmail.com</p>
                                    <p><svg width="326" height="1" viewBox="0 0 326 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line y1="0.5" x2="326" y2="0.5" stroke="#8BA7D0" stroke-dasharray="5 5" />
                                    </svg>
                                    </p>
                                    <p className="text-gray-400"> Company </p>
                                    <p>New ABC Construction.Ltd</p>
                                    <p><svg width="326" height="1" viewBox="0 0 326 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line y1="0.5" x2="326" y2="0.5" stroke="#8BA7D0" stroke-dasharray="5 5" />
                                    </svg>
                                    </p>

                                </div>
                                
                            </div><p className="text-lg pl-24"> Certificates:</p>
                            <section className="px-20">
                            <div className=" flex bg-white py-5 rounded-lg">
                                <div className="w-1/12"></div>
                                <div className="w-11/12 px-9">
                                    <p className="font-bold">Site Manager</p>
                                    <p className="text-gray-400">Valid from  - 23 June 2018 to 23 June 2028</p>
                                </div>

                            </div>
                            </section>
                            <section className="px-20 py-5">
                            <div className=" flex bg-white py-5 rounded-lg">
                                <div className="w-1/12"></div>
                                <div className="w-11/12 px-9">
                                    <p className="font-bold">Mapping Expert </p>
                                    <p className="text-gray-400">Valid from  - 23 June 2016 to 23 June 2026</p>
                                </div>

                            </div>
                            </section>
                            <section className="px-20">
                            <div className=" flex bg-white py-5 rounded-lg">
                                <div className="w-1/12"></div>
                                <div className="w-11/12 px-9 lg:pr-40">
                                    <p className="font-bold">Labour Manager </p>
                                    <p className="text-gray-400">Valid from  - 23 June 2018 to 23 June 2028</p>
                                    <p className="text-gray-400"><span className="font-bold text-black">Note - </span>
                                    Lorem ipsumdolor sit amet, consecteture adipiscing elit. Adipiscing eu Lorem
                                    condimentum diam. Commodo magnis pretium aliquam maecenas various fames. Enim 
                                    urna faucibus hac urna egesta posuere dictum odio consequat. Morbi hac consecetur.</p>
                                </div>

                            </div>
                            </section>

                        </div>

                    </div>
                </section>
                </div>
            </>
        );
    }
}

export default Popup;
