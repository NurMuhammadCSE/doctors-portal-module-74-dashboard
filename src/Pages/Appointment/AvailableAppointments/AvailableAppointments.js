import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointments = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  });
  return (
    <section>
      <p className="text-center text-primary text-bold">
        Available Services on: {format(selectedDate, "PP")}
      </p>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2  mt-6">
        {appointmentOptions.map((appointment) => (
          <AppointmentOption
            key={appointment._id}
            appointment={appointment}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment && <BookingModal 
      selectedDate={selectedDate}
      treatment={treatment}></BookingModal>}{" "}
    </section>
  );
};

export default AvailableAppointments;
