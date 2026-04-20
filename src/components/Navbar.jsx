import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between item-center px-10 py-5 bg-gray-900 text-white shadow-lg">
      <h2 className="text-2xl font-bold tracking-wider">My Portfolio</h2>
      <div className="space-x-6 font-medium">
        <Link to="/" className="hover: text-blue-400 transition">Home</Link>
        <Link to="/skills" className="hover: text-blue-400 transition">Skills</Link>
        <Link to="/project-gallery" className="hover: text-blue-400 transition">Project</Link>
        <Link to="/services" className="hover: text-blue-400 transition">Services</Link>
        <Link to="/contact" className="hover: text-blue-400 transition">Contact Us</Link>
      </div>
    </nav>
  );
}
