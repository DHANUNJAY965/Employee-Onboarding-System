// import React, { useState } from 'react';
// import { X, Calendar, Plus } from 'lucide-react';

// const EducationForm = () => {
//   const [educationSections, setEducationSections] = useState([1]);
//   const [skills, setSkills] = useState(['Observer']);

//   const addEducationSection = () => {
//     setEducationSections([...educationSections, educationSections.length + 1]);
//   };

//   const removeSkill = (skillToRemove) => {
//     setSkills(skills.filter(skill => skill !== skillToRemove));
//   };

//   return (
//     <div className="p-6 max-w-4xl">
//       {educationSections.map((section, index) => (
//         <div key={section} className="mb-8">
//           <h2 className="text-2xl font-medium text-gray-800 mb-4">
//             {index === 0 && "Education"}
//           </h2>

//           <div className="space-y-4">
//             <div>
//               <label className="block text-gray-800 mb-2">Institute Name</label>
//               <input
//                 type="text"
//                 className="w-full h-[46px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(0,0,0,0.25)] rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3"
//               />
//             </div>

//             <div className="flex gap-4">
//               <div className="flex-1">
//                 <label className="block text-gray-800 mb-2">Qualification</label>
//                 <input
//                   type="text"
//                   className="w-full h-[46px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(0,0,0,0.25)] rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3"
//                 />
//               </div>
//               <div className="flex-1">
//                 <label className="block text-gray-800 mb-2">Grade</label>
//                 <input
//                   type="text"
//                   className="w-full h-[46px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(0,0,0,0.25)] rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3"
//                 />
//               </div>
//             </div>

//             <div className="flex gap-4">
//               <div>
//                 <label className="block text-gray-800 mb-2">Start Date</label>
//                 <div className="relative">
//                   <input
//                     type="text"
//                     placeholder="mm/yyyy"
//                     className="w-[204px] h-[46px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(0,0,0,0.25)] rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3 pr-10"
//                   />
//                   <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-gray-800 mb-2">End Date</label>
//                 <div className="relative">
//                   <input
//                     type="text"
//                     placeholder="mm/yyyy"
//                     className="w-[204px] h-[46px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(0,0,0,0.25)] rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3 pr-10"
//                   />
//                   <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
//                 </div>
//               </div>
//               <div className="flex items-end">
//                 <button className="h-[46px] px-4 bg-gray-200 rounded-lg flex items-center gap-2">
//                   Upload Document
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}

//       <button
//         onClick={addEducationSection}
//         className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
//       >
//         <Plus size={24} />
//       </button>

//       <div className="mt-8">
//         <h2 className="text-2xl font-medium text-gray-800 mb-4">Skills</h2>
//         <div className="flex flex-wrap gap-2">
//           {skills.map((skill) => (
//             <div
//               key={skill}
//               className="px-3 py-1 bg-gray-300 rounded-full flex items-center gap-1"
//             >
//               <span>{skill}</span>
//               <button onClick={() => removeSkill(skill)}>
//                 <X size={16} />
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EducationForm;

import React, { useState } from "react";
import { X, Calendar, Plus, Minus } from "lucide-react";

const EducationForm = () => {
  const [educationSections, setEducationSections] = useState([1]);
  const [skills, setSkills] = useState(["Observer"]);
  const [currentSkill, setCurrentSkill] = useState("");

  const addEducationSection = () => {
    setEducationSections([...educationSections, educationSections.length + 1]);
  };

  const removeEducationSection = (indexToRemove) => {
    if (educationSections.length > 1) {
      setEducationSections(
        educationSections.filter((_, index) => index !== indexToRemove)
      );
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const handleSkillKeyDown = (e) => {
    if (e.key === "Enter" && currentSkill.trim()) {
      e.preventDefault();
      setSkills([...skills, currentSkill.trim()]);
      setCurrentSkill("");
    }
  };

  return (
    <div className="p-6 max-w-4xl">
      <h2 className="text-2xl font-medium text-gray-800 mb-6">Education</h2>

      <div className={`relative space-y-8 ${educationSections.length > 1 ? 'pl-12' : ''}`}>
        {educationSections.map((section, index) => (
          <div key={section} className="relative">
            {educationSections.length > 1 && (
              <div className="absolute -left-12 top-0 bottom-0 flex items-stretch">
                <div className="relative flex gap-2 items-stretch">
                  <div className="-left-4 self-center top-0 text-3xl font-bold text-blue-900">
                    {index + 1}
                  </div>
                  <div className="w-1 bg-blue-900 rounded-full"></div>
                </div>
              </div>
            )}

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-gray-800 mb-2">
                    Institute Name
                  </label>
                  <input
                    type="text"
                    className="w-full h-[46px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(0,0,0,0.25)] rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3"
                  />
                </div>
                <div className="w-1/4">
                  <label className="block text-gray-800 mb-2">
                    Qualification
                  </label>
                  <input
                    type="text"
                    className="w-full h-[46px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(0,0,0,0.25)] rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3"
                  />
                </div>
                <div className="w-1/4">
                  <label className="block text-gray-800 mb-2">Grade</label>
                  <input
                    type="text"
                    className="w-full h-[46px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(0,0,0,0.25)] rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div>
                  <label className="block text-gray-800 mb-2">Start Date</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="dd/mm/yyyy"
                      className="w-[204px] h-[46px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(0,0,0,0.25)] rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3 pr-10"
                    />
                    <Calendar
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                      size={20}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-800 mb-2">End Date</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="dd/mm/yyyy"
                      className="w-[204px] h-[46px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(0,0,0,0.25)] rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3 pr-10"
                    />
                    <Calendar
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                      size={20}
                    />
                  </div>
                </div>
                <div className="flex items-end">
                  <button className="h-[46px] px-4 bg-gray-200 rounded-lg flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10"
                        stroke="#666666"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.3334 5.33333L8.00008 2L4.66675 5.33333"
                        stroke="#666666"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 2V10"
                        stroke="#666666"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Upload Document
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="flex gap-4 w-fit mx-auto mt-4">
          <button
            onClick={addEducationSection}
            className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
          >
            <Plus size={24} />
          </button>

          {educationSections.length > 1 && (
            <button
              onClick={() =>
                removeEducationSection(educationSections.length - 1)
              }
              className="w-12 h-12 bg-red-400 rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors"
            >
              <Minus size={24} />
            </button>
          )}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-medium text-gray-800 mb-4">Skills</h2>
        <div className="p-4 bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(0,0,0,0.25)] rounded-lg">
          <input
            type="text"
            value={currentSkill}
            onChange={(e) => setCurrentSkill(e.target.value)}
            onKeyDown={handleSkillKeyDown}
            placeholder="Type a skill and press Enter"
            className="w-full mb-2 p-2 outline-none"
          />
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <div
                key={skill}
                className="px-3 py-1 bg-gray-300 rounded-full flex items-center gap-1"
              >
                <span>{skill}</span>
                <button
                  onClick={() => removeSkill(skill)}
                  className="hover:bg-gray-400 rounded-full"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationForm;