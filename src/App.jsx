import React from "react";
import PageHeader from "./components/Header";
import EmployeeFormTabs from "./components/EmployeeFormTabs";

const App = () => {
  return (
    <>
      <div className="mx-12 mt-5 overflow-x-hidden">
        <PageHeader />
        <EmployeeFormTabs />  
      </div>
      
    </>
  );
};

export default App;
