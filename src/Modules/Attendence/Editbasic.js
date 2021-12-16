import React, { useState, useEffect } from 'react'
import axios from "axios";
import "../sass/style.css";
import Popup from "./Popup";
import { Row, Col, Input, Button } from "antd";
const Editbasic = () => {


  return (
    <React.Fragment>
            {/* Edit Basic Information card starts */}
      <div className="figma_font">
        <section className="p-3 px-20">
          <div className="edit_basic_body shadow-2xl py-10 px-20">

            <div className="  flex flex-col justify-center items-center ">
              <p className="edit_basic_h1">Edit Basic Information</p>
              <div className="edit_basic_hlogo flex pt-24 pb-12">
                <div>Change Company logo</div>
              </div>

            </div>
            <hr></hr>

            <div className="input_container pt-8">
              <label className="form_label ">Account Name</label>
              <div className="pt-3">
                <Input
                  placeholder="&nbsp;&nbsp;&nbsp;Daniel Ricciardo"
                  className="edit_basic_border "
                /></div>
            </div>
            <div className="input_container pt-3">
              <label className="form_label ">Company Address</label>
              <div className="pt-3 ">
                <Input
                  placeholder="&nbsp;&nbsp;&nbsp;1256 William St, Sydney, NSW 2001"
                  className="edit_basic_border "
                /></div>
            </div>
            <div className="pt-6 flex text-center">
              <div className="w-1/2 "><button className="edit_basic_cancel_bt pt-3">Cancel</button></div>
              <div className="w-1/2 "><div className="edit_basic_save_bt"><button className="edit_basic_save-text pt-3">Save</button></div></div>

            </div>


          </div>
        </section>
      </div>
       {/* Edit Basic Information card ends */}

        {/* Edit Card Information card starts */}
      <div className="figma_font">
        <section className="p-3 px-20">
          <div className="edit_card_body shadow-2xl py-10 px-20">

            <div className="  flex flex-col justify-center items-center ">
              <p className="edit_card_h1">Edit Card Information</p>
            </div>
            <div className="input_container pt-9">
              <label className="form_label ">Card number</label>
              <div className="pt-3">
                <Input
                  placeholder="&nbsp;&nbsp;&nbsp;1338  -  9583  -  9446  - 6436"
                  className="edit_basic_border "
                /></div>
            </div>
            <div className="input_container pt-3">
              <label className="form_label ">Expiry Date</label>
              <div className="pt-3 ">
                <Input
                  placeholder="&nbsp;&nbsp;&nbsp;09-26"
                  className="edit_basic_border "
                /></div>
            </div>
            <div className="input_container pt-3">
              <label className="form_label ">Name on Card</label>
              <div className="pt-3 ">
                <Input
                  placeholder="&nbsp;&nbsp;&nbsp;Ricardo"
                  className="edit_basic_border "
                /></div>
            </div>
            <div className="pt-6 flex text-center">
              <div className="w-1/2 "><button className="edit_basic_cancel_bt pt-3">Cancel</button></div>
              <div className="w-1/2 "><div className="edit_basic_save_bt"><button className="edit_basic_save-text pt-3">Save</button></div></div>

            </div>


          </div>
        </section>
      </div>
       {/* Edit Card Information card ends */}

        {/* Change password card starts */}
      <div className="figma_font">
        <section className="p-3 px-20">
          <div className="change_password_body shadow-2xl py-10 px-20">

            <div className="  flex flex-col justify-center items-center ">
              <p className="edit_card_h1">Change Password</p>
            </div>
            <div className="input_container pt-9">
              <label className="form_label ">Enter Current Password</label>
              <div className="pt-3">
                <Input
                  placeholder="&nbsp;&nbsp;&nbsp;********"
                  className="edit_basic_border "
                /></div>
            </div>
            <div className="input_container pt-3">
              <label className="form_label ">Enter New Password</label>
              <div className="pt-3 ">
                <Input
                  placeholder="&nbsp;&nbsp;&nbsp;************"
                  className="edit_basic_border "
                /></div>
            </div>
            <div className="input_container pt-3">
              <label className="form_label ">Enter New Password</label>
              <div className="pt-3 ">
                <Input
                  placeholder="&nbsp;&nbsp;&nbsp;************"
                  className="edit_basic_border "
                /></div>
            </div>
            <div className="pt-6 flex text-center">
              <div className="w-1/2 "><button className="edit_basic_cancel_bt pt-3">Cancel</button></div>
              <div className="w-1/2 "><div className="edit_basic_save_bt"><button className="edit_basic_save-text pt-3">Save</button></div></div>

            </div>


          </div>
        </section>
      </div>
       {/* Change password card ends */}
       
    </React.Fragment>
  )
}

export default Editbasic;

