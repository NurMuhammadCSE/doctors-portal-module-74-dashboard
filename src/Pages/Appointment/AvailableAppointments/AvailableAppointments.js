import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Loading from "../../../Shared/Loading/Loading";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointments = ({ selectedDate }) => {
  // const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");

  const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
    queryKey: ["appointments", date],
    queryFn: () =>
      fetch(`http://localhost:5000/appointmentOptions?date=${date}`).then(
        (res) => res.json()
      ),
  });

  //   const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
  //     queryKey: ['appointmentOptions', date],
  //     queryFn: async () => {
  //         const res = await fetch(`http://localhost:5000/v2/appointmentOptions?date=${date}`);
  //         const data = await res.json();
  //         return data
  //     }
  // });

  // useEffect(() => {
  //   fetch("http://localhost:5000/appointmentOptions")
  //     .then((res) => res.json())
  //     .then((data) => setAppointmentOptions(data));
  // }, []);

  if(isLoading){
    return <Loading></Loading>
  }
  return (
    <section>
      <p className="text-center text-primary text-bold text-2xl">
        Available Services on: {format(selectedDate, "PP")}
      </p>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2  mt-6">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
        refetch={refetch}
          selectedDate={selectedDate}
          treatment={treatment}
          setTreatment={setTreatment}
        ></BookingModal>
      )}{" "}
    </section>
  );
};

export default AvailableAppointments;
