import React from "react";
import dental from "../../../assets/images/treatment.png";

const Dental = () => {
  return (
    <div className="hero mt-16 px-20">
      <div className="hero-content flex-col lg:flex-row justify-between">
        <div>
          <img alt="" src={dental} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
        <div>
          <h1 className="text-5xl font-bold">
            Exceptional Dental
            <br />
            Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dental;
