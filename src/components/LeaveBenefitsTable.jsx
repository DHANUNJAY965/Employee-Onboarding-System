import React, { useState } from 'react';
import { ArrowLeftRight, X } from 'lucide-react';

const LeaveBenefitsTable = () => {
  const [availableItems, setAvailableItems] = useState(['Scheme']);
  const [assignedItems, setAssignedItems] = useState([]);
  const [availableInput, setAvailableInput] = useState('');
  const [assignedInput, setAssignedInput] = useState('');
  const [availableTitle, setAvailableTitle] = useState('Available');
  const [assignedTitle, setAssignedTitle] = useState('Assigned');

  const leaveRows = [
    { code: 'HL', type: 'Hospitalization' },
    { code: 'UP', type: 'Unpaid' },
    { code: 'UP', type: 'Unpaid' },
    { code: 'UP', type: 'Unpaid' },
    { code: 'UP', type: 'Unpaid' },
    { code: 'UP', type: 'Unpaid' }
  ];

  const handleAvailableKeyDown = (e) => {
    if (e.key === 'Enter' && availableInput.trim()) {
      setAvailableItems([...availableItems, availableInput.trim()]);
      setAvailableInput('');
    }
  };

  const handleAssignedKeyDown = (e) => {
    if (e.key === 'Enter' && assignedInput.trim()) {
      setAssignedItems([...assignedItems, assignedInput.trim()]);
      setAssignedInput('');
    }
  };

  const removeAvailableItem = (index) => {
    setAvailableItems(availableItems.filter((_, i) => i !== index));
  };

  const removeAssignedItem = (index) => {
    setAssignedItems(assignedItems.filter((_, i) => i !== index));
  };

  const handleSwap = () => {
    setAvailableItems(assignedItems);
    setAssignedItems(availableItems);
    setAvailableTitle(prev => (prev === 'Available' ? 'Assigned' : 'Available'));
    setAssignedTitle(prev => (prev === 'Assigned' ? 'Available' : 'Assigned'));
  };

  return (
    <div className="p-6 font-sans">
      <h2 className="text-xl font-medium mb-4">Leave Benefits</h2>

      <div className="mb-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="w-4 h-4 border-[#1A72A7] shadow-[0_0_4px_#1A72A7] rounded-md accent-[#1A72A7]"
          />
          <span className="text-sm">Eligible for Off - In-Lieu</span>
        </label>
      </div>

      <div className="bg-[#2B2F86] text-white rounded-lg overflow-hidden mb-8">
        <div className="grid grid-cols-[100px_1fr_1fr_1fr_120px_120px] items-center p-4 gap-4">
          <div className="font-medium">Code</div>
          <div className="font-medium">Type</div>
          <div className="font-medium">Eligibility</div>
          <div className="flex items-center gap-2 font-medium">
            Leave Increment
            <div className="w-5 h-5 rounded-full bg-white text-[#2B2F86] flex items-center justify-center text-sm">
              i
            </div>
          </div>
          <div className="font-medium">Hourly Time-off</div>
          <div className="font-medium">Prorate</div>
        </div>

        {leaveRows.map((row, index) => (
          <div
            key={index}
            className="grid grid-cols-[100px_1fr_1fr_1fr_120px_120px] items-center p-4 gap-4 bg-white border-b border-gray-100"
          >
            <div className="text-gray-700 font-medium">{row.code}</div>
            <div>
              <span className="bg-[#bcbced] px-4 py-1 rounded-full text-sm">
                {row.type}
              </span>
            </div>
            <div>
              <input
                type="text"
                className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 font-poppins text-[12px] font-normal text-[rgba(51,51,51,0.8)] appearance-none focus:outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 font-poppins text-[12px] font-normal text-[rgba(51,51,51,0.8)] appearance-none focus:outline-none"
              />
            </div>
            <div className="flex justify-center">
              <input
                type="checkbox"
                className="w-4 h-4 border-[#1A72A7] shadow-[0_0_4px_#1A72A7] rounded-md accent-[#1A72A7]"
              />
            </div>
            <div className="flex justify-center">
              <input
                type="checkbox"
                className="w-4 h-4 border-[#1A72A7] shadow-[0_0_4px_#1A72A7] rounded-md accent-[#1A72A7]"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-medium mb-6">Health Benefits</h2>

        <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-start">
          <div className="relative">
            <h3 className="text-lg font-medium mb-4">{availableTitle}</h3>
            <div className="bg-white rounded-lg p-4 min-h-[200px] shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
              <input
                type="text"
                value={availableInput}
                onChange={(e) => setAvailableInput(e.target.value)}
                onKeyDown={handleAvailableKeyDown}
                placeholder="Type and press Enter"
                className="w-full mb-3 h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 font-poppins text-[12px] font-normal text-[rgba(51,51,51,0.8)] appearance-none focus:outline-none"
              />
              <div className="flex flex-wrap gap-2">
                {availableItems.map((item, index) => (
                  <div key={index} className="inline-flex items-center gap-2 bg-gray-200 rounded-full px-3 py-1 text-sm">
                    {item}
                    <button 
                      className="p-0.5 hover:bg-gray-300 rounded-full"
                      onClick={() => removeAvailableItem(index)}
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center pt-8">
            <button 
              onClick={handleSwap}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeftRight size={24} className="text-gray-400" />
            </button>
          </div>

          <div className="relative">
            <h3 className="text-lg font-medium mb-4">{assignedTitle}</h3>
            <div className="bg-white rounded-lg p-4 min-h-[200px] shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
              <input
                type="text"
                value={assignedInput}
                onChange={(e) => setAssignedInput(e.target.value)}
                onKeyDown={handleAssignedKeyDown}
                placeholder="Type and press Enter"
                className="w-full mb-3 h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 font-poppins text-[12px] font-normal text-[rgba(51,51,51,0.8)] appearance-none focus:outline-none"
              />
              <div className="flex flex-wrap gap-2">
                {assignedItems.map((item, index) => (
                  <div key={index} className="inline-flex items-center gap-2 bg-gray-200 rounded-full px-3 py-1 text-sm">
                    {item}
                    <button 
                      className="p-0.5 hover:bg-gray-300 rounded-full"
                      onClick={() => removeAssignedItem(index)}
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveBenefitsTable;
