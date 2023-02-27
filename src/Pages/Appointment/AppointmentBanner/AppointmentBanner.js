import React, { useState } from "react";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const AppointmentBanner = ({selectedDate, setSelectedData}) => {

  return (
    <div style={{backgroundImage:`url(${bg})`}} className="my-6" >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} alt="dentist Chair" className="lg:w-1/2 rounded-lg shadow-xl"/>
          <div className="mr-6">
            <DayPicker
            className="shadow-xl rounded-lg"
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedData}
            ></DayPicker>
            {/* <p>You Have Selected : {format(selectedDate, "PP")}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
