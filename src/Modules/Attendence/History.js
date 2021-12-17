import React, { useState, useEffect } from 'react'
import axios from "axios";
import "../sass/style.css";
import Button from '@mui/material/Button';
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
      <div className="figma_font">
        <section className="p-3">
          <div className="live_att_address  shadow-2xl">
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
        {/* search bar place */}
        <div className="flex pl-3 pr-5  text-gray-700 ">
          <div className="w-2/12 text-center">Name</div>

          <div className="  w-3/12 text-center">Company Name</div>
          <div className="  w-2/12 text-center ">Worker/Visitor</div>
          <div className="  w-1/12 pl-3">Inducted</div>
          <div className="   w-1/12 text-center">Daily Prestart</div>
          <div className=" w-1/12 pl-4">Time-In</div>
          <div className=" w-1/12 pl-3 ">Time-Out</div>
          <div className=" w-1/12 text-center">Hours On Site</div>
        </div>
        <section className="p-3">
          <div className="bg-white  text-black  p-5 shadow-2xl  ">
            {historyAttendenceData.map((e, i) => {
              return (
                <>
                  <div key={e.id} className="flex pt-4 pb-2 ">
                    <div className="w-3/12 ">
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
                    <div className="capitalize font-bold w-3/12 pl-2">{e.company} </div>
                    <div className="capitalize w-2/12 pl-2">{e.worker}</div>
                    <div className="  w-1/12">
                      {
                        e.inducted_status == "active" ?
                          <>
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="5.5" cy="5.5" r="5.5" fill="#70CF73" />
                            </svg>
                          </>
                          :
                          <>
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="5.5" cy="5.5" r="5.5" fill="#EF7474" />
                            </svg>
                          </>
                      }
                    </div>
                    <div className="pl-3 text-center  w-1/12">
                      {
                        e.daily_prestart == "active" ?
                          <>
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="5.5" cy="5.5" r="5.5" fill="#70CF73" />
                            </svg>
                          </>
                          :
                          <>
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="5.5" cy="5.5" r="5.5" fill="#EF7474" />
                            </svg>
                          </>
                      }
                    </div>
                    <div className=" w-1/12 ">{e.timein}</div>
                    <div className=" w-1/12 pl-2">{e.timeout}</div>
                    <div className="w-1/12 pl-5">{e.hrs_on_site}</div>
                  </div>
                  <hr></hr>
                </>
              )
            })}
          </div>
        </section>
        <div className="flex -mt-32">
              <div className="w-10/12"></div>
              <div className="w-1/12 "><Button variant="text " > <span className="user_setting"></span></Button></div>
              <div className="w-1/12"><Button variant="text " > <span className="user_setting"></span></Button></div>
            </div>
      </div>
    </React.Fragment>
  )
}

export default History;
