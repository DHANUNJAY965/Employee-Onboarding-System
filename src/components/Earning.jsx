import { FiChevronDown } from "react-icons/fi"; 
import React, { useState } from "react";
import { FiPlus as Plus, FiMinus as Minus } from "react-icons/fi";

const Earning = () => {
  // State to manage multiple sections
  const [ordinaryWages, setOrdinaryWages] = useState([{ title: "", amount: "" }]);
  const [additionalWages, setAdditionalWages] = useState([{ title: "", amount: "" }]);

  // Function to add a new ordinary wage section
  const addOrdinaryWageSection = () => {
    setOrdinaryWages([...ordinaryWages, { title: "", amount: "" }]);
  };

  // Function to remove an ordinary wage section
  const removeOrdinaryWageSection = (index) => {
    if (index === ordinaryWages.length - 1) {
      const updatedWages = ordinaryWages.filter((_, i) => i !== index);
      setOrdinaryWages(updatedWages);
    }
  };

  // Function to add a new additional wage section
  const addAdditionalWageSection = () => {
    setAdditionalWages([...additionalWages, { title: "", amount: "" }]);
  };

  // Function to remove an additional wage section
  const removeAdditionalWageSection = (index) => {
    if (index === additionalWages.length - 1) {
      const updatedWages = additionalWages.filter((_, i) => i !== index);
      setAdditionalWages(updatedWages);
    }
  };
  return (
    <>
    <div className="grid grid-cols-4 gap-6 p-6 ">
      {/* Basic Pay */}
      <div className="col-span-1">
        <label className="text-[18px] leading-[27px] font-poppins font-normal text-black">
          Basic Pay
        </label>
        <div className="flex gap-2">
          <select className="w-14 h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 font-poppins text-[12px] font-normal text-[rgba(51,51,51,0.8)] focus:outline-none">
            <option>$</option>
          </select>
          <input
            type="text"
            className="h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 font-poppins text-[12px] font-normal text-[rgba(51,51,51,0.8)] focus:outline-none"
          />
        </div>
      </div>

      {/* Payment Type */}
      <div className="col-span-1">
        <label className="text-[18px] leading-[27px] font-poppins font-normal text-black">
          Payment Type
        </label>
        <input
          type="text"
          placeholder="Initial"
          className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 font-poppins text-[12px] font-normal text-[rgba(51,51,51,0.8)] focus:outline-none"
        />
      </div>

      {/* Payment Mode */}
      <div className="col-span-1 relative">
        <label className="text-[18px] leading-[27px] font-poppins font-normal text-black">
          Payment Mode
        </label>
        <select className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 font-poppins text-[12px] font-normal text-[rgba(51,51,51,0.8)] appearance-none focus:outline-none">
          <option>Select Payment Method</option>
        </select>
        <FiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600" size={16} />
      </div>

      {/* Frequency */}
      <div className="col-span-1 relative">
        <label className="text-[18px] leading-[27px] font-poppins font-normal text-black">
          Frequency
        </label>
        <select className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 font-poppins text-[12px] font-normal text-[rgba(51,51,51,0.8)] appearance-none focus:outline-none">
          <option>Select Pay Frequency</option>
        </select>
        <FiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600" size={16} />
      </div>

      {/* Pay Basis */}
      <div className="col-span-1 relative">
        <label className="text-[18px] leading-[27px] font-poppins font-normal text-black">
          Pay Basis
        </label>
        <select className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 font-poppins text-[12px] font-normal text-[rgba(51,51,51,0.8)] appearance-none focus:outline-none">
          <option>Select Pay Basis</option>
        </select>
        <FiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600" size={16} />
      </div>

      {/* Hourly Rate */}
      <div className="col-span-1">
        <label className="text-[18px] leading-[27px] font-poppins font-normal text-black">
          Hourly Rate
        </label>
        <div className="flex gap-2">
          <select className="w-16 h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 font-poppins text-[12px] font-normal text-[rgba(51,51,51,0.8)] focus:outline-none">
            <option>$</option>
          </select>
          <input
            type="text"
            className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 font-poppins text-[12px] font-normal text-[rgba(51,51,51,0.8)] focus:outline-none"
          />
        </div>
      </div>

      {/* Daily Rate */}
      <div className="col-span-1">
        <label className="text-[18px] leading-[27px] font-poppins font-normal text-black">
          Daily Rate
        </label>
        <div className="flex gap-2">
          <select className="w-16 h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 font-poppins text-[12px] font-normal text-[rgba(51,51,51,0.8)] focus:outline-none">
            <option>$</option>
          </select>
          <input
            type="text"
            className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 font-poppins text-[12px] font-normal text-[rgba(51,51,51,0.8)] focus:outline-none"
          />
        </div>
      </div>

      {/* Salary Advance */}
      <div className=" flex flex-col gap-2">
        <label className="text-[18px] leading-[27px] font-poppins font-normal text-black">
          Salary Advance
        </label>
        <input type="checkbox" className="w-6 h-6 border-[#1A72A7] shadow-[0_0_4px_#1A72A7] rounded-md accent-[#1A72A7]" />
      </div>

      
    </div>
    <div className="p-6 space-y-4">
        {/* Other Ordinary Wages */}
        <div>
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black">
            Other Ordinary Wages (If Any)
          </label>
          {ordinaryWages.map((wage, index) => (
            <div key={index} className="flex gap-8 items-center mt-2">
              <div className="w-1/3">
                <label className="text-[18px] leading-[27px] font-poppins font-normal text-black">Title</label>
                <input
                  type="text"
                  placeholder="Title"
                  className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 font-poppins text-[12px] font-normal text-[rgba(51,51,51,0.8)] focus:outline-none"
                  value={wage.title}
                  onChange={(e) => {
                    const updatedWages = [...ordinaryWages];
                    updatedWages[index].title = e.target.value;
                    setOrdinaryWages(updatedWages);
                  }}
                />
              </div>
              <div className="w-1/3">
                <label className="text-[18px] leading-[27px] font-poppins font-normal text-black">Amount</label>
                <input
                  type="text"
                  placeholder="Amount"
                  className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 font-poppins text-[12px] font-normal text-[rgba(51,51,51,0.8)] focus:outline-none"
                  value={wage.amount}
                  onChange={(e) => {
                    const updatedWages = [...ordinaryWages];
                    updatedWages[index].amount = e.target.value;
                    setOrdinaryWages(updatedWages);
                  }}
                />
              </div>
              <div className="flex items-center">
                <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mr-2">CPF Applicable</label>
                <input type="checkbox" className="w-4 h-4 border-[#1A72A7] shadow-[0_0_4px_#1A72A7] rounded-md accent-[#1A72A7]" />
              </div>
              <div className="flex items-center">
                <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mr-2">TAX Applicable</label>
                <input type="checkbox" className="w-4 h-4 border-[#1A72A7] shadow-[0_0_4px_#1A72A7] rounded-md accent-[#1A72A7]" />
              </div>
              <div className="flex items-center">
                {/* Add Button */}
                {index === ordinaryWages.length - 1 && (
                  <button
                    type="button"
                    className="p-1 rounded-full bg-green-500 text-white hover:bg-green-600 transition"
                    onClick={addOrdinaryWageSection}
                  >
                    <Plus size={16} />
                  </button>
                )}
                {/* Remove Button (only visible on the last section if there is more than one entry) */}
                {ordinaryWages.length > 1 && index === ordinaryWages.length - 1 && (
                  <button
                    type="button"
                    className="p-1 ml-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
                    onClick={() => removeOrdinaryWageSection(index)}
                  >
                    <Minus size={16} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Wages */}
        <div>
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black">
            Additional Wages (If Any)
          </label>
          {additionalWages.map((wage, index) => (
            <div key={index} className="flex gap-8 items-center mt-2">
              <div className="w-1/3">
                <label className="text-[18px] leading-[27px] font-poppins font-normal text-black">Title</label>
                <input
                  type="text"
                  placeholder="Title"
                  className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 font-poppins text-[12px] font-normal text-[rgba(51,51,51,0.8)] focus:outline-none"
                  value={wage.title}
                  onChange={(e) => {
                    const updatedWages = [...additionalWages];
                    updatedWages[index].title = e.target.value;
                    setAdditionalWages(updatedWages);
                  }}
                />
              </div>
              <div className="w-1/3">
                <label className="text-[18px] leading-[27px] font-poppins font-normal text-black">Amount</label>
                <input
                  type="text"
                  placeholder="Amount"
                  className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 font-poppins text-[12px] font-normal text-[rgba(51,51,51,0.8)] focus:outline-none"
                  value={wage.amount}
                  onChange={(e) => {
                    const updatedWages = [...additionalWages];
                    updatedWages[index].amount = e.target.value;
                    setAdditionalWages(updatedWages);
                  }}
                />
              </div>
              <div className="flex items-center">
                <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mr-2">CPF Applicable</label>
              <input type="checkbox" className="w-4 h-4 border-[#1A72A7] shadow-[0_0_4px_#1A72A7] rounded-md accent-[#1A72A7]" />
              </div>
              <div className="flex items-center">
                <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mr-2">TAX Applicable</label>
                <input type="checkbox" className="w-4 h-4 border-[#1A72A7] shadow-[0_0_4px_#1A72A7] rounded-md accent-[#1A72A7]" />
              </div>
              <div className="flex items-center">
                {/* Add Button */}
                {index === additionalWages.length - 1 && (
                  <button
                    type="button"
                    className="p-1 rounded-full bg-green-500 text-white hover:bg-green-600 transition"
                    onClick={addAdditionalWageSection}
                  >
                    <Plus size={16} />
                  </button>
                )}
                {/* Remove Button (only visible on the last section if there is more than one entry) */}
                {additionalWages.length > 1 && index === additionalWages.length - 1 && (
                  <button
                    type="button"
                    className="p-1 ml-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
                    onClick={() => removeAdditionalWageSection(index)}
                  >
                    <Minus size={16} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Earning;