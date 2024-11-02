import React, { useState } from "react";
import PersonalDetails from "./Personaldetails";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import ContactForm from "./ContactForm";
import MaritalStatusForm from "./MaritalStatusForm";
import EmployeeForm from "./EmployeeForm";
import Earning from "./Earning";
import LeaveBenefitsTable from "./LeaveBenefitsTable";
import OffBoard from "./OffBoard";

const navItems = [
  { id: 1, label: "Personal Details", active: true },
  { id: 2, label: "Education & Skills", active: false },
  { id: 3, label: "Experience", active: false },
  { id: 4, label: "Reference & Emergency Contact", active: false },
  { id: 5, label: "Family Details", active: false },
  { id: 6, label: "Employment", active: false },
  { id: 7, label: "Earning", active: false },
  { id: 8, label: "Benefits", active: false },
  { id: 9, label: "Off Boarding", active: false },
];

const EmployeeFormTabs = ({setUserName}) => {
  const [activeTab, setActiveTab] = useState(1);
  const [formData, setFormData] = useState({
    personalDetails: {},
    education: {},
    experience: {},
    contact: {},
    maritalStatus: {},
    employment: {},
    earning: {},
    Benefits: {},
  });

  const handleFormDataChange = (key, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: data,
    }));
  };

  const handleNext = () => {
    if (activeTab < navItems.length) {
      setActiveTab(activeTab + 1);
      navItems.forEach((navItem) => {
        navItem.active = navItem.id === activeTab + 1;
      });
    }
    else{
      alert(`Here are the details that are now given: ${JSON.stringify(formData)}`);

    }
  };

  const handleBack = () => {
    if (activeTab > 1) {
      setActiveTab(activeTab - 1);
      navItems.forEach((navItem) => {
        navItem.active = navItem.id === activeTab - 1;
      });
    }
  };

  return (
    <div className="flex mx-36 my-8 flex-col w-[1110px]">
      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #888 #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>

      <div className="flex gap-1 p-1 border-b-[3px] pb-3 border-b-[#333333] overflow-x-auto custom-scrollbar">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveTab(item.id);
              navItems.forEach((navItem) => {
                navItem.active = navItem.id === item.id;
              });
            }}
            className={`w-fit rounded-3xl whitespace-nowrap ml-1 px-4 py-3 text-xs font-bold text-center font-poppins transition-colors
              ${
                item.active
                  ? "bg-blue-900 text-white"
                  : "bg-gray-100 shadow-[inset_-6px_-6px_4px_rgba(255,233,233,0.25),inset_6px_6px_4px_#CFCFCF] hover:bg-gray-200"
              }
            `}
            style={!item.active ? { color: "#232A69" } : {}}
          >
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      <div className="w-full my-4 h-[450px] overflow-y-auto custom-scrollbar">
        

{activeTab === 1 && (
          <PersonalDetails
            data={formData.personalDetails}
            setUserName={setUserName}
            setData={(data) => handleFormDataChange("personalDetails", data)}
          />
        )}
        {activeTab === 2 && (
          <EducationForm
            data={formData.education}
            setData={(data) => handleFormDataChange("education", data)}
          />
        )}
        {activeTab === 3 && (
          <ExperienceForm
            data={formData.experience}
            setData={(data) => handleFormDataChange("experience", data)}
          />
        ) }
        
        {activeTab === 4 && (
          <ContactForm
            data={formData.contact}
            setData={(data) => handleFormDataChange("contact", data)}
          />
        )}
        {/* && console.log("the data is : ",formData.personalDetails,formData.education,formData.experience) */}
        {activeTab === 5 && (
          <MaritalStatusForm
            data={formData.maritalStatus}
            setData={(data) => handleFormDataChange("maritalStatus", data)}
          />
        ) }
        {/* && console.log("the contact details are :",formData.contact) */}
        {activeTab === 6 && (
          <EmployeeForm
            data={formData.employment}
            setData={(data) => handleFormDataChange("employment", data)}
          />
        )}
        {activeTab === 7 && (
          <Earning
            data={formData.earning}
            setData={(data) => handleFormDataChange("earning", data)}
          />
        ) }
        {/* && console.log("the contact details are :",formData.employment) */}
        {activeTab === 8 && (
          <LeaveBenefitsTable
            data={formData.Benefits}
            setData={(data) => handleFormDataChange("Benefits", data)}
          />
        )}
        {/* && console.log("the contact details are :",formData.earning) */}
        {activeTab === 9 && (
          <OffBoard
            data={formData.earning}
            setData={(data) => handleFormDataChange("earning", data)}
          />
        )}
        {/* && console.log("the contact details are :",formData.Benefits) */}
      </div>

      <div className="flex items-center justify-between mt-4">
        <div>
          {activeTab > 1 && (
            <button
              onClick={handleBack}
              className="flex items-center gap-2 px-6 py-2 text-white bg-[#1E3B8B] rounded-lg hover:bg-[#1a3279] transition-colors"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
              >
                <path
                  d="M19 12H5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 19L5 12L12 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back
            </button>
          )}
        </div>

        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-6 py-2 text-[#1E3B8B] bg-[#E7EEF9] rounded-lg hover:bg-[#d8e3f3] transition-colors">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.666 5.83334L14.1667 4.33334H2.5V15.8333H17.5V7.33334L15.666 5.83334ZM10 14.5833C8.625 14.5833 7.5 13.4583 7.5 12.0833C7.5 10.7083 8.625 9.58334 10 9.58334C11.375 9.58334 12.5 10.7083 12.5 12.0833C12.5 13.4583 11.375 14.5833 10 14.5833ZM12.5 8.33334H4.16667V5.83334H12.5V8.33334Z" />
            </svg>
            Save as Draft
          </button>

          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-2 text-white bg-[#1E3B8B] rounded-lg hover:bg-[#1a3279] transition-colors"
          >
            {activeTab === 9 ? `Save` : `Next`}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
            >
              <path
                d="M5 12H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5L19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeFormTabs;
