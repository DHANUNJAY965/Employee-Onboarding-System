import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

const EmployeeForm = () => {
  const [equipmentSections, setEquipmentSections] = useState([1]);
  const [sourceValue, setSourceValue] = useState('');
  const [businessUnitValue, setBusinessUnitValue] = useState('');
  const [departmentValue, setDepartmentValue] = useState('');
  const [designationValue, setDesignationValue] = useState('');
  const [reportingToValue, setReportingToValue] = useState('');
  const [userRoleValue, setUserRoleValue] = useState('');
  const [probationPeriodValue, setProbationPeriodValue] = useState('');
  const [workingDaysValue, setWorkingDaysValue] = useState('');
  const [employmentTypeValue, setEmploymentTypeValue] = useState('');
  const [logInValue, setLogInValue] = useState('');

  const addEquipmentSection = () => {
    setEquipmentSections([...equipmentSections, equipmentSections.length + 1]);
  };

  const removeLastEquipmentSection = () => {
    if (equipmentSections.length > 1) {
      setEquipmentSections(equipmentSections.slice(0, -1));
    }
  };

  const CustomSelect = ({ placeholder, options, value, onChange }) => (
    <div className="relative pt-2">
      <select
        value={value}
        onChange={onChange}
        className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 font-poppins text-[12px] font-normal text-[rgba(51,51,51,0.8)] appearance-none focus:outline-none"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600" size={16} />
    </div>
  );

  return (
    <div className="p-4 space-y-4">
      {/* Form Fields */}
      <div className="grid grid-cols-4 gap-x-4 gap-y-6">
        <div>
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black">Source</label>
          <CustomSelect
            placeholder="Select Source"
            options={["Re-requirement", "Internal Transfer", "Promotion", "External Hire", "Rehire"]}
            value={sourceValue}
            onChange={(e) => setSourceValue(e.target.value)}
          />
        </div>
        <div>
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black">Business Unit</label>
          <CustomSelect
            placeholder="Select Business Unit"
            options={["Business Unit 1", "Business Unit 2", "Business Unit 3"]}
            value={businessUnitValue}
            onChange={(e) => setBusinessUnitValue(e.target.value)}
          />
        </div>
        <div>
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black">Department</label>
          <CustomSelect
            placeholder="Select Department"
            options={["Department 1", "Department 2", "Department 3"]}
            value={departmentValue}
            onChange={(e) => setDepartmentValue(e.target.value)}
          />
        </div>
        <div>
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black">Designation</label>
          <CustomSelect
            placeholder="Select Designation"
            options={["Designation 1", "Designation 2", "Designation 3"]}
            value={designationValue}
            onChange={(e) => setDesignationValue(e.target.value)}
          />
        </div>
        <div>
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black">Reporting To</label>
          <CustomSelect
            placeholder="Select Reporting To"
            options={["Manager 1", "Manager 2", "Manager 3"]}
            value={reportingToValue}
            onChange={(e) => setReportingToValue(e.target.value)}
          />
        </div>
        <div>
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black">User Role</label>
          <CustomSelect
            placeholder="Select User Role"
            options={["Admin", "Editor", "Viewer"]}
            value={userRoleValue}
            onChange={(e) => setUserRoleValue(e.target.value)}
          />
        </div>
        <div>
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black">Probation Period</label>
          <CustomSelect
            placeholder="Select Probation Period"
            options={["3 Months", "6 Months", "12 Months"]}
            value={probationPeriodValue}
            onChange={(e) => setProbationPeriodValue(e.target.value)}
          />
        </div>
        <div>
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black">Working Days</label>
          <CustomSelect
            placeholder="Select Working Days"
            options={["5 Days", "6 Days", "7 Days"]}
            value={workingDaysValue}
            onChange={(e) => setWorkingDaysValue(e.target.value)}
          />
        </div>
        <div>
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black">Employment Type</label>
          <CustomSelect
            placeholder="Select Employment Type"
            options={["Full-time", "Part-time", "Contract"]}
            value={employmentTypeValue}
            onChange={(e) => setEmploymentTypeValue(e.target.value)}
          />
        </div>
        <div>
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black">Log In</label>
          <CustomSelect
            placeholder="Select Employment Type"
            options={["Enable", "Disable"]}
            value={employmentTypeValue}
            onChange={(e) => setEmploymentTypeValue(e.target.value)}
          />
        </div>
        <div>
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black">Eligible For</label>
          <div className="mt-3 flex space-x-4">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-[16px]">Part Time</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-[16px]">Over Time</span>
            </label>
          </div>
        </div>
      </div>

      <div >
        <div className="text-md font-medium text-gray-900 mb-3">Equipment Issuance</div>
        {equipmentSections.map((section, index) => (
          <div key={section} className="grid grid-cols-5 gap-x-4 gap-y-2 mt-2">
            <div>
              <CustomSelect
                placeholder="Select Type"
                options={["Laptop", "Phone", "Tablet", "Desktop", "Monitor"]}
              />
            </div>
            <div className='pt-2'>
            <input
                type="text"
                placeholder="Brand Name"
                className="w-[204px] h-[46px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(0,0,0,0.25)] rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3"
              />
            </div>
            <div className='pt-2'>
            <input
                type="text"
                placeholder="Model"
                className="w-[204px] h-[46px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(0,0,0,0.25)] rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3"
              />
            </div>
            <div className='pt-2'>
            <input
                type="text"
                placeholder="Serial Number"
                className="w-[204px] h-[46px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(0,0,0,0.25)] rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3"
              />
            </div>
            <div className='pt-2'>
            <input
                type="text"
                placeholder="Cost"
                className="w-[204px] h-[46px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(0,0,0,0.25)] rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3"
              />
            </div>
            <div className="flex items-center space-x-1 ">
              <input
                type="date"
                 className="w-[204px] h-[46px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(0,0,0,0.25)] rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3"
              />
              
              {index === equipmentSections.length - 1 && (
                <div className="flex space-x-1">
                  <button
                    type="button"
                    className="p-1 rounded-full bg-green-500 text-white hover:bg-green-600 transition"
                    onClick={addEquipmentSection}
                  >
                    <Plus size={16} />
                  </button>
                  {equipmentSections.length > 1 && (
                    <button
                      type="button"
                      className="p-1 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
                      onClick={removeLastEquipmentSection}
                    >
                      <Minus size={16} />
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeForm;
