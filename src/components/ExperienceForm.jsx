// import React, { useState } from 'react';
// import { Calendar, Plus, Minus } from 'lucide-react';

// const ExperienceForm = () => {
//   const [experienceSections, setExperienceSections] = useState([1]);
//   const [selectedFiles, setSelectedFiles] = useState({});

//   const addExperienceSection = () => {
//     setExperienceSections([...experienceSections, experienceSections.length + 1]);
//   };

//   const removeExperienceSection = (indexToRemove) => {
//     if (experienceSections.length > 1) {
//       setExperienceSections(experienceSections.filter((_, index) => index !== indexToRemove));
//       const newSelectedFiles = { ...selectedFiles };
//       delete newSelectedFiles[indexToRemove];
//       setSelectedFiles(newSelectedFiles);
//     }
//   };

//   const handleFileChange = (event, sectionIndex) => {
//     const file = event.target.files[0];
//     if (file) {
//       setSelectedFiles({
//         ...selectedFiles,
//         [sectionIndex]: file
//       });
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl">
//       <h2 className="text-2xl font-medium text-gray-800 mb-6">Experience</h2>

//       <div className={`relative space-y-8 ${experienceSections.length > 1 ? 'pl-12' : ''}`}>
//         {experienceSections.map((section, index) => (
//           <div key={section} className="relative">
//             {experienceSections.length > 1 && (
//               <div className="absolute -left-12 top-0 bottom-0 flex items-center">
//                 <div className="relative flex items-center h-full">
//                   <div className="w-1 ml-2 bg-blue-900 h-full rounded-full"></div>
//                   <div className="absolute -left-4 top-1/2 -translate-y-1/2 text-3xl font-bold text-blue-900">
//                     {index + 1}
//                   </div>
//                 </div>
//               </div>
//             )}
            
//             <div className="space-y-4">
//               <div className="flex gap-4">
//                 <div className="w-1/5">
//                   <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Location</label>
//                   <input
//                     type="text"
//                     className="w-full h-[46px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(0,0,0,0.25)] rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3"
//                   />
//                 </div>
//                 <div className="w-2/5">
//                   <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Company Name</label>
//                   <input
//                     type="text"
//                     className="w-full h-[46px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(0,0,0,0.25)] rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3"
//                   />
//                 </div>
//                 <div className="w-2/5">
//                   <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Designation</label>
//                   <input
//                     type="text"
//                     className="w-full h-[46px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(0,0,0,0.25)] rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3"
//                   />
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <div className="w-1/4">
//                   <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Period From</label>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       placeholder="mm/yyyy"
//                       className="w-full h-[46px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(0,0,0,0.25)] rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3 pr-10"
//                     />
//                     <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
//                   </div>
//                 </div>
//                 <div className="w-1/4">
//                   <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">To</label>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       placeholder="mm/yyyy"
//                       className="w-full h-[46px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(0,0,0,0.25)] rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3 pr-10"
//                     />
//                     <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
//                   </div>
//                 </div>
//                 <div className="w-1/4">
//                   <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Reason for Leaving</label>
//                   <input
//                     type="text"
//                     className="w-full h-[46px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(0,0,0,0.25)] rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3"
//                   />
//                 </div>
//                 <div className="w-1/4">
//                   <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Upload Document</label>
//                   <div className="relative">
//                     <input
//                       type="file"
//                       id={`file-${index}`}
//                       onChange={(e) => handleFileChange(e, index)}
//                       className="hidden"
//                     />
//                     <label
//                       htmlFor={`file-${index}`}
//                       className="h-[46px] w-full px-4 bg-gray-100 rounded-lg flex items-center gap-2 cursor-pointer border border-gray-300 hover:bg-gray-200 transition-colors"
//                     >
//                       <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" stroke="#666666" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
//                         <path d="M11.3334 5.33333L8.00008 2L4.66675 5.33333" stroke="#666666" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
//                         <path d="M8 2V10" stroke="#666666" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
//                       </svg>
//                       {selectedFiles[index]?.name || 'Choose File'}
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}

//         <div className="flex w-fit mx-auto gap-4 mt-4">
//           <button
//             onClick={addExperienceSection}
//             className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
//           >
//             <Plus size={24} />
//           </button>
          
//           {experienceSections.length > 1 && (
//             <button
//               onClick={() => removeExperienceSection(experienceSections.length - 1)}
//               className="w-12 h-12 bg-red-400 rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors"
//             >
//               <Minus size={24} />
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExperienceForm;



import React, { useState, useEffect } from 'react';
import { Calendar, Plus, Minus } from 'lucide-react';

const ExperienceForm = ({ data, setData }) => {
  // Structure for a single experience entry
  const defaultExperienceEntry = {
    location: "",
    companyName: "",
    designation: "",
    periodFrom: "",
    periodTo: "",
    reasonForLeaving: "",
    document: "",
    documentFile: null
  };

  // Initialize state with default values or existing data
  const [experienceSections, setExperienceSections] = useState(
    data?.experienceEntries?.length > 0 
      ? data.experienceEntries 
      : [defaultExperienceEntry]
  );

  // Update parent component whenever our state changes
  useEffect(() => {
    setData({
      experienceEntries: experienceSections
    });
  }, [experienceSections, setData]);

  const addExperienceSection = () => {
    setExperienceSections([...experienceSections, defaultExperienceEntry]);
  };

  const removeExperienceSection = (indexToRemove) => {
    if (experienceSections.length > 1) {
      setExperienceSections(
        experienceSections.filter((_, index) => index !== indexToRemove)
      );
    }
  };

  const updateExperienceSection = (index, field, value) => {
    const updatedSections = experienceSections.map((section, i) => {
      if (i === index) {
        return { ...section, [field]: value };
      }
      return section;
    });
    setExperienceSections(updatedSections);
  };

  const handleFileUpload = async (index, file) => {
    if (!file) return;
    
    // Store the file in state
    updateExperienceSection(index, 'documentFile', file);
    
    // This function will be implemented later to handle actual file upload
    // For now, just store the file name
    const fileUrl = await handleFile(file);
    updateExperienceSection(index, 'document', fileUrl);
  };

  // Placeholder function - to be implemented later
  const handleFile = async (file) => {
    return "";
  };

  return (
    <div className="p-6 max-w-4xl">
      <h2 className="text-2xl font-medium text-gray-800 mb-6">Experience</h2>

      <div className={`relative space-y-8 ${experienceSections.length > 1 ? 'pl-12' : ''}`}>
        {experienceSections.map((section, index) => (
          <div key={index} className="relative">
            {experienceSections.length > 1 && (
              <div className="absolute -left-12 top-0 bottom-0 flex items-center">
                <div className="relative flex items-center h-full">
                  <div className="w-1 ml-2 bg-blue-900 h-full rounded-full"></div>
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2 text-3xl font-bold text-blue-900">
                    {index + 1}
                  </div>
                </div>
              </div>
            )}
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1/5">
                  <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Location</label>
                  <input
                    type="text"
                    value={section.location || ''}
                    onChange={(e) => updateExperienceSection(index, 'location', e.target.value)}
                    className="w-full h-[46px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(0,0,0,0.25)] rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3"
                  />
                </div>
                <div className="w-2/5">
                  <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Company Name</label>
                  <input
                    type="text"
                    value={section.companyName || ''}
                    onChange={(e) => updateExperienceSection(index, 'companyName', e.target.value)}
                    className="w-full h-[46px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(0,0,0,0.25)] rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3"
                  />
                </div>
                <div className="w-2/5">
                  <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Designation</label>
                  <input
                    type="text"
                    value={section.designation || ''}
                    onChange={(e) => updateExperienceSection(index, 'designation', e.target.value)}
                    className="w-full h-[46px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(0,0,0,0.25)] rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1/4">
                  <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Period From</label>
                  <div className="relative">
                    <input
                      type="month"
                      value={section.periodFrom || ''}
                      onChange={(e) => updateExperienceSection(index, 'periodFrom', e.target.value)}
                      className="w-full h-[46px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(0,0,0,0.25)] rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3 pr-10"
                    />
                    
                  </div>
                </div>
                <div className="w-1/4">
                  <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">To</label>
                  <div className="relative">
                    <input
                      type="month"
                      value={section.periodTo || ''}
                      onChange={(e) => updateExperienceSection(index, 'periodTo', e.target.value)}
                      className="w-full h-[46px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(0,0,0,0.25)] rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3 pr-10"
                    />
                    
                  </div>
                </div>
                <div className="w-1/4">
                  <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Reason for Leaving</label>
                  <input
                    type="text"
                    value={section.reasonForLeaving || ''}
                    onChange={(e) => updateExperienceSection(index, 'reasonForLeaving', e.target.value)}
                    className="w-full h-[46px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(0,0,0,0.25)] rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3"
                  />
                </div>
                <div className="w-1/4">
                  <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Upload Document</label>
                  <div className="relative">
                    <input
                      type="file"
                      id={`file-${index}`}
                      onChange={(e) => handleFileUpload(index, e.target.files[0])}
                      className="hidden"
                    />
                    <label
                      htmlFor={`file-${index}`}
                      className="h-[46px] w-full px-4 bg-gray-100 rounded-lg flex items-center gap-2 cursor-pointer border border-gray-300 hover:bg-gray-200 transition-colors"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" stroke="#666666" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M11.3334 5.33333L8.00008 2L4.66675 5.33333" stroke="#666666" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 2V10" stroke="#666666" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {section.documentFile ? section.documentFile.name : 'Choose File'}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="flex w-fit mx-auto gap-4 mt-4">
          <button
            onClick={addExperienceSection}
            className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
          >
            <Plus size={24} />
          </button>
          
          {experienceSections.length > 1 && (
            <button
              onClick={() => removeExperienceSection(experienceSections.length - 1)}
              className="w-12 h-12 bg-red-400 rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors"
            >
              <Minus size={24} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceForm;