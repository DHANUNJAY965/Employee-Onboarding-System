import React, { useState } from 'react';

const MaritalStatusForm = () => {
  const [maritalStatus, setMaritalStatus] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [otherStatus, setOtherStatus] = useState('');

  const maritalOptions = ['Single', 'Married', 'Others', 'Prefer not to say'];

  const handleStatusChange = (status) => {
    setMaritalStatus(status);
    setIsDropdownOpen(false);
  };

  return (
    <div className="p-6">
      <div className="flex flex-col mb-6">
        <label className="text-black text-lg mb-2">Marital Status</label>
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-[204px] h-[46px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(0,0,0,0.25)] rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3 text-left relative"
          >
            {maritalStatus || 'Single'}
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2">▼</span>
          </button>

          {isDropdownOpen && (
            <div className="absolute z-10 w-[204px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(0,0,0,0.25)] rounded-lg mt-1">
              {maritalOptions.map((option) => (
                <div
                  key={option}
                  onClick={() => handleStatusChange(option)}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-[18px] font-light tracking-wider"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {maritalStatus === 'Married' && (
        <div>
          <h2 className="text-black text-lg font-normal mb-6">Family Details</h2>
          <div className="grid grid-cols-4 gap-x-8">
            <div className="flex flex-col mb-6">
              <label className="text-black text-lg mb-2">Spouse Employment Status</label>
              <input
                type="text"
                placeholder="Select Marital Status"
                className="w-[204px] h-[46px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(0,0,0,0.25)] rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3"
              />
            </div>
            <div className="flex flex-col mb-6">
              <label className="text-black text-lg mb-2">No. of Children</label>
              <input
                type="text"
                className="w-[204px] h-[46px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(0,0,0,0.25)] rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3"
              />
            </div>
            <div className="flex flex-col mb-6">
              <label className="text-black text-lg mb-2">Name</label>
              <input
                type="text"
                className="w-[204px] h-[46px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(0,0,0,0.25)] rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3"
              />
            </div>
            <div className="flex flex-col mb-6">
              <label className="text-black text-lg mb-2">Relationship</label>
              <input
                type="text"
                placeholder="Child 1"
                className="w-[204px] h-[46px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(0,0,0,0.25)] rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-black text-lg mb-2">Date of Birth</label>
              <div className="relative">
                <input
                  type="date"
                  placeholder="dd/mm/yyyy"
                  className="w-[204px] h-[46px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(0,0,0,0.25)] rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3 pr-10"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {maritalStatus === 'Others' && (
        <div className="flex flex-col">
          <label className="text-black text-lg mb-2">Others</label>
          <input
            type="text"
            value={otherStatus}
            onChange={(e) => setOtherStatus(e.target.value)}
            className="w-[204px] h-[46px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(0,0,0,0.25)] rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3"
          />
        </div>
      )}
    </div>
  );
};

export default MaritalStatusForm;

