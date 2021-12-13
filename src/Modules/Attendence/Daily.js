import React, { Component } from "react";
import { Link } from "react-router-dom";
class Daily extends Component {
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
        <div className="bg-white  text-black  p-5 shadow-xl">
          <p className="font-bold text-2xl">
            Site Attendence: Melbourne F1 Track
          </p>
          <p className="font-bold">
            Address: 12 Aughtie Dr, Park VIC 3206, Australia
          </p>
        </div>
      </section>
      <div  className="flex pr-5  text-gray-700">
                  <div className="w-3/12 "></div>
                  <div className=" pl-3 w-3/12">Company Name</div>
                  <div className="  w-1/12 ">Worker/Visitor</div>
                  <div className=" text-center w-2/12">Inducted</div>
                  <div className="   w-1/12">Daily Prestart</div>
                  <div className=" w-1/12 ">Time-In</div>
                  <div className=" w-1/12 pr-10">Time-Out</div>
                  
                </div>
                <section className="p-3">
        <div className="bg-white  text-black  p-5 shadow-2xl  ">
          {items.map((item) => {
            

            return (
              <>
               
                <div key={item.id} className="flex pt-4 pb-2 pl-6">
                  <div className="w-3/12 ">
                    <div className="flex">
                      <div className="w-1/6">
                        <img
                          src={item.image}
                          alt="Image"
                          className="rounded-full h-10 w-10 -mt-1"
                        />
                      </div>
                      <div className="pl-3 w-5/6 font-bold text-blue-600 capitalize">
                        {item.name}
                      </div>
                    </div>
                  </div>
                  <div className="capitalize font-bold w-3/12 ">{item.company} </div>
                  <div className="capitalize w-1/12 ">{item.worker}</div>
                  <div className=" text-center w-2/12">🟢</div>
                  <div className="  pl-2 w-1/12">🔴</div>
                  <div className=" w-1/12 ">{item.timein}</div>
                  <div className=" w-1/12 pl-2">{item.timeout}</div>
                  
                </div>
                <hr></hr>
              </>
            );
          })}
        </div>
      </section>
      </>
    );
  }
}

export default Daily;