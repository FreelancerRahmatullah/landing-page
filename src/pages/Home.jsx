import { motion } from "motion/react"
import { scale } from "motion/react";
import React from "react";
import { Link } from "react-router-dom";
import resume from "../../public/resume-of-rahmatullah.pdf"

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center bg-gray-50 px-5 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-extrabold text-gray-800 mb-4"
      >
        Hello I am <span className="text-blue-600">Rahmatullah</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-2xl text-gray-600 max-w-2xl mb-8"
      >
        I am a Full-Stack Web Developer. I build modern solutions for your
        business using React, JavaScript and TailwindCSS.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex gap-4"
      >
        <Link to="/project-gallery">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition shadow-md border-none">
            See my works
          </button>
        </Link>
        <Link to="/contact">
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
            Contact Us
          </button>
        </Link>
      </motion.div>
      <a href={resume} download className="mt-4 inline-block text-blue-600 font-semibold hover:underline">Download my CV (PDF)</a>
    </div>
  );
}
