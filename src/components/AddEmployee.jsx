import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalState';

export const AddEmployee = () => {
  let history = useHistory();

  const { addEmployee, employees } = useContext(GlobalContext);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [designation, setDesignation] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      id: employees.length + 1,
      name,
      location,
      designation,
    };
    addEmployee(newEmployee);
    history.push("/");
  };

  return (
    <React.Fragment>
      <div className="mt-10">
        <div className='container mx-auto text-center border border-indigo-500 rounded-md w-1/2 p-5'>
          <h5 className="text-gray-900 font-bold text-xl">Create Employee</h5>
        </div>
      </div>
      <div className="w-1/2 container mt-10 mx-auto border border-indigo-500 p-5 rounded-md">
        <form onSubmit={onSubmit}>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name of employee
            </label>
            <input
              className="border-2 border-indigo-500 rounded-md w-full p-3 focus:outline-indigo-600"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter name"
              required
            />
          </div>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="designation"
            >
              Designation
            </label>
            <input
              className="border-2 border-indigo-500 rounded-md w-full p-3 focus:outline-indigo-600"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              type="text"
              placeholder="Enter designation"
              required
            />
          </div>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="location"
            >
              Location
            </label>
            <input
              className="border-2 border-indigo-500 rounded-md w-full p-3 focus:outline-indigo-600"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              placeholder="Enter location"
              required
            />
          </div>
          <div className="flex space-x-2">
            <button className="bg-purple-500 text-white px-4 py-3 rounded-md">
              Add Employee
            </button>
            <div className="bg-gray-700 text-white px-4 py-3 rounded-md">
              <Link to="/">Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};