import React, { useState } from "react";
import { FaCocktail, FaHiking, FaBeer, FaShuttleVan } from "react-icons/fa";
import Title from "./Title";

const Services = () => {
  const servicesData = [
    {
      icon: <FaCocktail />,
      title: "Free Coctails",
      info:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, nobis.",
    },

    {
      icon: <FaHiking />,
      title: "Endless Hiking",
      info:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, nobis.",
    },
    {
      icon: <FaShuttleVan />,
      title: "Free Shuttle",
      info:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, nobis.",
    },
    {
      icon: <FaBeer />,
      title: "Stronges Beer",
      info:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, nobis.",
    },
  ];

  const [services, setServices] = useState(servicesData);

  return (
    <section className="services">
      <Title title="services"></Title>
      <div className="services-center">
        {services.map((item, index) => {
          return (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
