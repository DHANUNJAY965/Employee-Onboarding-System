import React from "react";
import PageHeader from "./components/Header";
import EmployeeFormTabs from "./components/EmployeeFormTabs";

const App = () => {
  return (
    <>
      <div className="w-screen h-screen overflow-hidden flex flex-col">
        <PageHeader />
        <EmployeeFormTabs />  
      </div>
    </>
  );
};

export default App;
