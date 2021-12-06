import React, { useState } from "react";
import data from "./Data";

const Live = () => {
  const [presents, setCards] = useState(data);

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
                  <div className=" pl-10 w-3/12">Company Name</div>
                  <div className=" w-1/12 ">Worker/Visitor</div>
                  <div className="text-center  w-3/12 ">Inducted</div>
                  <div className="text-center  w-2/12">Daily Prestart</div>
                  
                </div>
      <section className="p-3">
        <div className="bg-white  text-black  p-5 shadow-2xl  ">
          {presents.map((presents) => {
            const { id, image, name, company, worker, inducted, prestart } =
              presents;

            return (
              <>
               
                <div key={id} className="flex pt-4 pb-2 pl-6">
                  <div className="w-3/12 ">
                    <div className="flex">
                      <div className="w-2/6">
                        <img
                          src={image}
                          alt={image}
                          className="rounded-full h-10 w-10 -mt-1"
                        />
                      </div>
                      <div className="w-4/6 font-bold text-blue-600">
                        {name}{" "}
                      </div>
                    </div>
                  </div>
                  <div className=" font-bold w-3/12 ">{company} </div>
                  <div className=" w-1/12 ">{worker}</div>
                  <div className=" text-center w-3/12">🟢</div>
                  <div className=" text-center  w-2/12">🔴</div>
                  
                </div>
                <hr></hr>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Live;
