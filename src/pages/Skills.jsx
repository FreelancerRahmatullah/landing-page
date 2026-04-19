import React from "react";
const skills = [
  { name: "React.js", level: "90%", color: "bg-blue-500" },
  { name: "JavaScript", level: "85%", color: "bg-yellow-500" },
  { name: "Tailwind CSS", level: "95%", color: "bg-teal-500" },
  { name: "HTML/CSS", level: "100%", color: "bg-orange-500" },
];

export default function Skills() {
  return (
    <div className="py-20 bg-white px-10">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 ">
        My Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between font-semibold text-gray-700">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className={`${skill.color} h-4 rounded-full transition-all duration-1000`}
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
