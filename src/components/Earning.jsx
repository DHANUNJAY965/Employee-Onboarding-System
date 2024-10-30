import React from 'react';

const Earnings = () => {
  return (
    <div className="p-4 max-w-3xl mx-auto bg-gray-100">
      <form className="grid grid-cols-2 gap-4">
        
        {/* Basic Pay */}
        <div className="col-span-2">
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black">Basic Pay</label>
          <div className="flex space-x-2">
            <select className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 font-poppins text-[12px] font-normal text-[rgba(51,51,51,0.8)] appearance-none focus:outline-none">
              <option>$</option>
            </select>
            <input type="text" className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 font-poppins text-[12px] font-normal text-[rgba(51,51,51,0.8)] appearance-none focus:outline-none" />
          </div>
        </div>
        
        {/* Payment Type */}
        <div>
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black">Payment Type</label>
          <input type="text" className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 font-poppins text-[12px] font-normal text-[rgba(51,51,51,0.8)] appearance-none focus:outline-none" placeholder="Initial" />
        </div>

        {/* Payment Mode */}
        <div>
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black">Payment Mode</label>
          <select className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 font-poppins text-[12px] font-normal text-[rgba(51,51,51,0.8)] appearance-none focus:outline-none">
            <option>Select Payment Method</option>
          </select>
        </div>

        {/* Frequency */}
        <div>
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black">Frequency</label>
          <select className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 font-poppins text-[12px] font-normal text-[rgba(51,51,51,0.8)] appearance-none focus:outline-none">
            <option>Select Pay Frequency</option>
          </select>
        </div>

        {/* Pay Basis */}
        <div>
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black">Pay Basis</label>
          <select className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 font-poppins text-[12px] font-normal text-[rgba(51,51,51,0.8)] appearance-none focus:outline-none">
            <option>Select Pay Basis</option>
          </select>
        </div>

        {/* Hourly Rate */}
        <div>
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black">Hourly Rate</label>
          <div className="flex space-x-2">
            <select className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 font-poppins text-[12px] font-normal text-[rgba(51,51,51,0.8)] appearance-none focus:outline-none">
              <option>$</option>
            </select>
            <input type="text" className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 font-poppins text-[12px] font-normal text-[rgba(51,51,51,0.8)] appearance-none focus:outline-none" />
          </div>
        </div>

        {/* Daily Rate */}
        <div>
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black">Daily Rate</label>
          <div className="flex space-x-2">
            <select className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 font-poppins text-[12px] font-normal text-[rgba(51,51,51,0.8)] appearance-none focus:outline-none">
              <option>$</option>
            </select>
            <input type="text" className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 font-poppins text-[12px] font-normal text-[rgba(51,51,51,0.8)] appearance-none focus:outline-none" />
          </div>
        </div>

        {/* Salary Advance */}
        <div className="flex items-center">
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black">Salary Advance</label>
          <input type="checkbox" className="ml-2" />
        </div>

        {/* Other Ordinary Wages */}
        <div className="col-span-2">
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black">Other Ordinary Wages (If Any)</label>
          <div className="grid grid-cols-4 gap-2">
            <input type="text" className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 font-poppins text-[12px] font-normal text-[rgba(51,51,51,0.8)] appearance-none focus:outline-none" placeholder="Title" />
            <input type="text" className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 font-poppins text-[12px] font-normal text-[rgba(51,51,51,0.8)] appearance-none focus:outline-none" placeholder="Amount" />
            <div className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>CPF Applicable</span>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>TAX Applicable</span>
            </div>
          </div>
        </div>

        {/* Additional Wages */}
        <div className="col-span-2">
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black">Additional Wages (If Any)</label>
          <div className="grid grid-cols-4 gap-2">
            <input type="text" className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 font-poppins text-[12px] font-normal text-[rgba(51,51,51,0.8)] appearance-none focus:outline-none" placeholder="Title" />
            <input type="text" className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 font-poppins text-[12px] font-normal text-[rgba(51,51,51,0.8)] appearance-none focus:outline-none" placeholder="Amount" />
            <div className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>CPF Applicable</span>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>TAX Applicable</span>
            </div>
          </div>
        </div>

      </form>
    </div>
  );
};

export default Earnings;
