import React, { useState, useEffect } from 'react'
import axios from "axios";

const Live = () => {
  const [liveAttendenceData, setLiveAttendenceData] = useState([]);

  const getLiveAttendenceDatas = async () => {
    try {
      const responseview = await axios.get(
        "https://run.mocky.io/v3/d27c5795-ba97-4c1e-b323-de279404a3bc"
      );
      setLiveAttendenceData(responseview.data);
      console.log("list", responseview.data);
    } catch (error) {
      console.log("list", error);
    }
  }

  useEffect(() => {
    getLiveAttendenceDatas();
  }, [])

  return (
    <React.Fragment>
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
      <div className="flex pr-5  text-gray-700">
        <div className="w-3/12 "></div>
        <div className=" pl-10 w-3/12">Company Name</div>
        <div className=" w-1/12 ">Worker/Visitor</div>
        <div className="text-center  w-3/12 ">Inducted</div>
        <div className="text-center  w-2/12">Daily Prestart</div>

      </div>
      <section className="p-3">
        <div className="bg-white  text-black  p-5 shadow-2xl  ">
          {liveAttendenceData.map((e) => {


            return (
              <>

                <div key={e.id} className="flex pt-4 pb-2 pl-6">
                  <div className="w-3/12 ">
                    <div className="flex">
                      <div className="w-1/6">
                        <img
                          src={e.image}
                          alt="Image"
                          className="rounded-full h-10 w-10 -mt-1"
                        />
                      </div>
                      <div className="pl-3 w-5/6 font-bold text-blue-600 capitalize">
                        {e.name}{" "}
                      </div>
                    </div>
                  </div>
                  <div className="capitalize font-bold w-3/12 ">{e.company} </div>
                  <div className="capitalize w-1/12 ">{e.worker}</div>
                  <div className=" text-center w-3/12">
                    {
                      e.inducted_status == "active" ?
                        <>
                          🟢
                        </>
                        :
                        <>
                          🔴
                        </>
                    }
                  </div>
                  <div className=" text-center  w-2/12">
                    {
                      e.daily_prestart == "active" ?
                        <>
                          🟢
                        </>
                        :
                        <>
                          🔴
                        </>
                    }
                  </div>

                </div>
                <hr></hr>
              </>
            );
          })}
        </div>
      </section>
    </React.Fragment>
  )
}

export default Live;
