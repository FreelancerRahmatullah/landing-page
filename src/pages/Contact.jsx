import React from "react";

export default function Contact() {
  return (
    <div className="py-20 bg-white px-5">
      <div className="max-w-4xl mx-auto bg-gray-50 p-10 rounded-3xl shadow-sm border border-gray-100">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Contact Me
        </h2>
        <form action="https://formspree.io/f/xyklppwn" method="POST" className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Your Message"
            className="p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button type="submit" className="bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
