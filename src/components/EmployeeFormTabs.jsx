import React from 'react';
import PersonalDetails from './Personaldetails';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
import ContactForm from './ContactForm';
import MaritalStatusForm from './MaritalStatusForm';
import EmployeeForm from './EmployeeForm';
import Salary from './Earning';
import Earning from './Earning';
const navItems = [
  { id: 1, label: 'Personal Details', active: true },
  { id: 2, label: 'Education & Skills', active: false },
  { id: 3, label: 'Experience', active: false },
  { id: 4, label: 'Reference & Emergency Contact', active: false },
  { id: 5, label: 'Family Details', active: false },
  { id: 6, label: 'Employment', active: false },
  { id: 7, label: 'Earning', active: false },
  { id: 8, label: 'Benefits', active: false },
  { id: 9, label: 'Off Boarding', active: false },
];

const EmployeeFormTabs = () => {
  return (
    <>
    <div className="m-16 mt-12 w-full">
      <div className="flex flex-col overflow-x-auto no-scrollbar w-fit">
        <div className="flex gap-1 p-1 border-b-[3px] pb-3 border-b-[#333333]">

          {navItems.map((item) => (
            <button
              key={item.id}
              className={`w-fit rounded-3xl whitespace-nowrap ml-1 px-4 py-3 text-xs font-bold text-center font-poppins transition-colors
                ${item.active 
                  ? 'bg-blue-900 text-white ' 
                  : 'bg-gray-100 text-black shadow-[inset_-6px_-6px_4px_rgba(255,233,233,0.25),inset_6px_6px_4px_#CFCFCF] hover:bg-gray-200'
                }
              `}
            >
              <span>{item.label}</span>
            </button>
          ))}
        </div>
        <div className='border-2 my-4 h-[450px] overflow-y-auto'>
               {/* <PersonalDetails/> */}
               {/* <EducationForm/> */}
               {/* <ExperienceForm/> */}
               {/* <ContactForm/> */}
               {/* <MaritalStatusForm/> */}
               {/* <EmployeeForm/> */}
               {/* <Earning/> */}
        </div>
      </div>
    </div>
    
    

    </>
  );
};

export default EmployeeFormTabs;
