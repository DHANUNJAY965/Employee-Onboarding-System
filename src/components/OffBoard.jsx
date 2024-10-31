import React, { useState } from 'react';

const OffBoard = () => {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <div className="flex items-end gap-8 m-6">
      <div className="w-64">
        <label className="text-sm text-gray-700 font-medium mb-4 block">Date</label>
        <div className="relative">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 font-poppins text-[12px] font-normal text-[rgba(51,51,51,0.8)] appearance-none focus:outline-none"
            style={{
              
              '::-webkit-calendar-picker-indicator': {
                opacity: 0,
                position: 'absolute',
                right: 0,
                top: 0,
                width: '100%',
                height: '100%',
                cursor: 'pointer'
              }
            }}
          />
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="exitInterview"
            className="w-4 h-4 border-[#1A72A7] shadow-[0_0_4px_#1A72A7] rounded-md accent-[#1A72A7]"
          />
          <label 
            htmlFor="exitInterview"
            className="text-sm text-gray-700"
          >
            Exit Interview
          </label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="encashLeave"
            className="w-4 h-4 border-[#1A72A7] shadow-[0_0_4px_#1A72A7] rounded-md accent-[#1A72A7]"
          />
          <label 
            htmlFor="encashLeave"
            className="text-sm text-gray-700"
          >
            En-cash Leave
          </label>
        </div>
      </div>
    </div>
  );
};

export default OffBoard;