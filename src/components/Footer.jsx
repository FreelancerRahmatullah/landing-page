import React from "react";

export default function Footer() {
  return (
      <footer className="bg-gray-900 text-gray-400 py-10 text-center">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white">Rahmatullah</h2>
          <p>Full-Stack Web Developer</p>
        </div>
        <div className="flex justify-center gap-6 mb-6 text-xl">
          <a href="#" className="hover:text-white transition">Facebook</a>
          <a href="#" className="hover:text-white transition">GitHub</a>
          <a href="#" className="hover:text-white transition">LinkedIn</a>
        </div>
        <p className="text-sm border-t border-gray-800 pt-6">© 2026 Rahmatullah | All rights reserved</p>
      </footer>
  );
}
