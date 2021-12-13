import React, { Component } from "react";
import { Link } from "react-router-dom";

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
        <section className="p-3">
          <div className="bg-white  text-black  p-5 shadow-2xl">
            <p className="font-bold text-2xl">
              Site Attendence: Melbourne F1 Track
            </p>
            <p className="font-bold">
              Address: 12 Aughtie Dr, Park VIC 3206, Australia
            </p>
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
      </>
    );
  }
}

export default Signin;
