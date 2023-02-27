import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import white from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      img: fluoride,
      title: "Fluoride Treatment",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, assumenda",
    },
    {
      id: 2,
      img: cavity,
      title: "Fluoride Treatment",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, assumenda",
    },
    {
      id: 3,
      img: white,
      title: "Fluoride Treatment",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, assumenda",
    },
  ];
  return (
    <div className="mt-16">
      <div className="text-center">
        <h3 className="text-xl font-bold text-primary uppercase">Our Services</h3>
        <h1 className="text-3xl">Services We Provide</h1>
      </div>
      <div className="grid gap-[34px] md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
