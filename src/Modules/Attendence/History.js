import React, { useState, useEffect } from 'react'
import axios from "axios";

const History = () => {
  const [historyAttendenceData, setHistoryAttendenceData] = useState([]);

  const getHistoryDatas = async () => {
    try {
      const responseview = await axios.get(
        "https://run.mocky.io/v3/d27c5795-ba97-4c1e-b323-de279404a3bc"
      );
      setHistoryAttendenceData(responseview.data);
      console.log("list", responseview.data);
    } catch (error) {
      console.log("list", error);
    }
  }

  useEffect(() => {
    getHistoryDatas();
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
        <div className="w-2/12 text-center">Name</div>

        <div className="pl-5  w-3/12 text-center">Company Name</div>
        <div className="  w-2/12 text-center ">Worker/Visitor</div>
        <div className="  w-1/12 text-center">Inducted</div>
        <div className="   w-1/12 text-center">Daily Prestart</div>
        <div className=" w-1/12 text-center">Time-In</div>
        <div className=" w-1/12 text-center">Time-Out</div>
        <div className=" w-1/12 text-center">Hours On Site</div>
      </div>
      <section className="p-3">
        <div className="bg-white  text-black  p-5 shadow-2xl  ">
          {historyAttendenceData.map((e, i) => {
            return (
              <>
                <div key={e.id} className="flex pt-4 pb-2 ">
                  <div className="w-2/12 ">
                    <div className="flex">
                      <div className="w-1/6">
                        <img
                          src={e.image}
                          alt="Image"
                          className="rounded-full h-8 w-8 -mt-1"
                        />
                      </div>
                      <div className="pl-3 w-5/6 font-bold text-blue-600 capitalize">
                        {e.name}
                      </div>
                    </div>
                  </div>
                  <div className="capitalize font-bold w-3/12 ">{e.company} </div>
                  <div className="capitalize w-2/12 ">{e.worker}</div>
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
                  <div className=" w-1/12 ">{e.timein}</div>
                  <div className=" w-1/12 pl-2">{e.timeout}</div>
                  <div className="w-1/12 pl-7">{e.hrs_on_site}</div>
                </div>
                <hr></hr>
              </>
            )
          })}
        </div>
      </section>
    </React.Fragment>
  )
}

export default History;
