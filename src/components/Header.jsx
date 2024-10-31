// import React from 'react';
// import { ChevronLeft } from 'lucide-react';

// const PageHeader = () => {
//   // In a real app, you'd get this from your state management
//   const userName = "Raja Raja Cholan";

//   return (
//     <div className="flex items-center justify-between w-full px-4 py-1 bg-white border-b">
//       <div className="flex items-center gap-3">
//         <button className="p-1 rounded-lg hover:bg-gray-100">
//           <ChevronLeft className="w-5 h-5 text-gray-600" />
//         </button>
//         <h1 className="text-xl font-semibold text-gray-800 ml-4">Create-New Employee</h1>
//       </div>
//       <div className="text-right">
//         <span className="text-gray-700">{userName}</span>
//       </div>
//     </div>
//   );
// };

// export default PageHeader;


import React from 'react';

const PageHeader = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow-md">
      <div className="flex items-center gap-4">
        {/* Back button */}
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

        {/* Page title */}
        <h1 className="text-xl font-medium text-gray-800">Create-New Employee</h1>
      </div>

      {/* User name */}
      <div className="text-lg text-gray-700">Raja Raja Cholan</div>
    </header>
  );
};

export default  PageHeader;