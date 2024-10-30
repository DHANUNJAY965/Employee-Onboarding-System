import React from 'react';
import { ChevronLeft } from 'lucide-react';

const PageHeader = () => {
  // In a real app, you'd get this from your state management
  const userName = "Raja Raja Cholan";

  return (
    <div className="flex items-center justify-between w-full px-4 py-1 bg-white border-b">
      <div className="flex items-center gap-3">
        <button className="p-1 rounded-lg hover:bg-gray-100">
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <h1 className="text-xl font-semibold text-gray-800 ml-4">Create-New Employee</h1>
      </div>
      <div className="text-right">
        <span className="text-gray-700">{userName}</span>
      </div>
    </div>
  );
};

export default PageHeader;