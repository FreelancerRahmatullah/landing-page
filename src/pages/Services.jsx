import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    title: "Web Development",
    icon: "🌐",
    desc: "We build modern an fast React website",
  },
  {
    title: "Responsive Design",
    icon: "📱",
    desc: "Your site will look great on mobile, tablet, and desktop.",
  },
  {
    title: "API Integration",
    icon: "⚙️",
    desc: "Successfully add any external Data or API",
  },
];

export default function Services() {
  return (
    <div className="py-20 bg-gray-50 ps-10 text-center">
      <h2 className="text-4xl font-bold mb-12 text-gray-800 ">What I provide</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="text-5xl mb-4 ">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
