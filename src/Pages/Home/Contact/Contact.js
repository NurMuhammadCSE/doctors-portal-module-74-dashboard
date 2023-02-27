import React from "react";
import contact from "../../../assets/images/appointment.png";

const Contact = () => {
  return (
    <div style={{ background: `url(${contact})` }} className="mt-16">
      <h3 className="text-center text-4xl text-primary">Contact Us</h3>
      <h2 className="text-center text-5xl text-white">
        Stay connected with us
      </h2>
      <div className="mt-16 flex items-center justify-center">
        <form>
          <input
            type="text"
            placeholder="Email Address"
            className="input input-bordered input-secondary w-full max-w-xs"
          />
          <br /> <br />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered input-secondary w-full max-w-xs"
          />
          <br /> <br />
          <div className="form-control">
            <label className="label"></label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Your Message"
            ></textarea>
            <label className="label"></label>
          </div>
          <br />
          <br />
          <button className="btn btn-primary mx-20 items-center justify-center">
            Contact us
          </button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};

export default Contact;
