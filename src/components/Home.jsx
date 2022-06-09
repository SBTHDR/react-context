import React from "react";
import { Heading } from "./Heading";
import { EmployeeList } from "./EmployeeList";

export const Home = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto border border-indigo-500 mt-5 rounded-md p-5">
        <Heading />
      </div>
      <div className="container mx-auto border border-indigo-500 mt-5 rounded-md p-5">
        <EmployeeList />
      </div>
    </React.Fragment>
  );
};