import { sl } from "date-fns/locale";
import React from "react";

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, slots } = appointmentOption;
  return (
    <div>
      <div className="card shadow-xl">
        <div className="card-body text-center">
          <h2 className="text-secondary text-2xl font-bold">{name}</h2>
          <p>{slots.length > 0 ? slots[0] : "Try Another"}</p>
          <p>
            {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
          </p>
          <div className="card-actions justify-center">
            <label
            disabled={slots.length === 0}
              htmlFor="booking-modal"
              className="btn btn-primary text-white"
              onClick={()=> setTreatment(appointmentOption)}
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
