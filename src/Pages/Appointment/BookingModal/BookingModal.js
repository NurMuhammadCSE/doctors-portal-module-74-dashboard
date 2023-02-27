import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");
  // treatment is Appointment Options just different name
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.name.value;
    const phone = form.name.value;
    const slot = form.slot.value;

    // [3, 4, 5].map((val, i) => console.log(val, i))
    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: name,
      slot,
      email,
      phone,
    };
    console.log(name, email, phone, slot);
    // Todo: send data to the Server
    // and once data is saved then close the modal and display successfully toast
    console.log(booking);
    setTreatment(null)
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered w-full "
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            <input
              name="email"
              type="text"
              placeholder="Email Address"
              className="input input-bordered w-full"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />
            <br />
            <input
              type="submit"
              value="Submit"
              className="btn btn-accent input-bordered w-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
