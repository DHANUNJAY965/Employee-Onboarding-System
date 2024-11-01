import React from 'react';

const PageHeader = ({userName}) => {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow-md">
      <div className="flex items-center gap-4">
       
        <button 
          className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-lg"
          aria-label="Go back"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 12H5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 19L5 12L12 5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

       
        <h1 className="text-xl font-medium text-gray-800">Create-New Employee</h1>
      </div>


      <div className="text-lg text-gray-700">{userName}</div>
    </header>
  );
};

export default  PageHeader;