import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../sass/style.css";

class Signin extends Component {
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
       <section className="p-3">
          <div className="live_att_address ">
            <h1>
              Site Attendence: Melbourne F1 Track
            </h1>
            <h2>
              Address: 12 Aughtie Dr, Park VIC 3206, Australia
            </h2>
            <div className="flex  pt-3">
              <div className="pr-12" >
                <p className="total_workers_no">214</p>
                <p className="people_on_site">People on site</p>
              </div>
              <div className="pr-12">
                <p className="total_workers_present">199</p>
                <p className="workers">Workers</p>
              </div>
              <div>
                <p className="total_workers_visitors">15</p>
                <p className="visitors">Visitors</p>
              </div>
            </div>
            <div className="flex">
            <div><svg width="404" height="13" viewBox="0 0 404 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="404" height="13" rx="6.5" fill="#753AF4" />
            </svg>
            </div>
            <div><svg width="61" height="13" viewBox="0 0 61 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 6.5C0 2.91015 2.91015 0 6.5 0H54.5C58.0899 0 61 2.91015 61 6.5C61 10.0899 58.0899 13 54.5 13H6.5C2.91015 13 0 10.0899 0 6.5Z" fill="#EC4E86" />
            </svg>
            </div>
          </div>
          </div>
          
        </section>
        <section className="p-3">
          <div className="bg-white  text-black  p-5 shadow-2xl">
            <div className="h-80"></div>
            <div className="  flex flex-col justify-center items-center ">
              <p className="font-bold text-2xl">
                Scan QR code for manual sign in
              </p>
              <p>
                <svg
                  width="238"
                  height="1"
                  viewBox="0 0 238 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="0.5" x2="238" y2="0.5" stroke="black" />
                </svg>
              </p>
             
              <button className="mt-5 border rounded-none bg-blue-500 text-white px-12 py-3 "> Generate Another</button>
            </div>
          </div>
        </section>
        </div>
      </>
    );
  }
}

export default Signin;
