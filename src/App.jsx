import React from "react";
import PageHeader from "./components/Header";
import EmployeeFormTabs from "./components/EmployeeFormTabs";

const App = () => {
  const [userName, setUserName] = React.useState("Eg: Raja Raja Cholan");
  return (
    <>
      <div className="w-screen h-screen overflow-hidden flex flex-col">
      <PageHeader userName={userName} />
      <EmployeeFormTabs setUserName={setUserName} />
        <div>
        </div>
      </div>
    </>
  );
};

export default App;
