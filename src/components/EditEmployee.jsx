import React, { useState, useContext, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalState';

export const EditEmployee = (route) => {
  let history = useHistory();

  const { employees, editEmployee } = useContext(GlobalContext);

  const [selectedUser, setSelectedUser] = useState({
    id: null,
    name: "",
    designation: "",
    location: "",
  });

  const currentUserId = route.match.params.id;

  useEffect(() => {
    const employeeId = currentUserId;
    const selectedUser = employees.find(
      (currentEmployeeTraversal) => currentEmployeeTraversal.id === parseInt(employeeId)
    );
    setSelectedUser(selectedUser);
  }, [currentUserId, employees]);

  const onSubmit = (e) => {
    e.preventDefault();
    editEmployee(selectedUser);
    history.push("/");
  };

  const handleOnChange = (userKey, newValue) =>
    setSelectedUser({ ...selectedUser, [userKey]: newValue });

  if (!selectedUser || !selectedUser.id) {
    return <div className="mt-10">
    <div className='container mx-auto text-center border border-indigo-500 rounded-md w-1/2 p-5'>
      <h5 className="text-gray-900 font-bold text-xl">Invalid Employee ID.</h5>
    </div>
  </div>
  }

  return (
    <React.Fragment>
      <div className="mt-10">
        <div className='container mx-auto text-center border border-indigo-500 rounded-md w-1/2 p-5'>
          <h5 className="text-gray-900 font-bold text-xl">Edit Employee</h5>
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
              value={selectedUser.name}
              onChange={(e) => handleOnChange("name", e.target.value)}
              type="text"
              placeholder="Enter name"
              required
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="designation"
            >
              Designation
            </label>
            <input
              className="border-2 border-indigo-500 rounded-md w-full p-3 focus:outline-indigo-600"
              value={selectedUser.designation}
              onChange={(e) => handleOnChange("designation", e.target.value)}
              type="text"
              placeholder="Enter designation"
              required
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="location"
            >
              Location
            </label>
            <input
              className="border-2 border-indigo-500 rounded-md w-full p-3 focus:outline-indigo-600"
              value={selectedUser.location}
              onChange={(e) => handleOnChange("location", e.target.value)}
              type="text"
              placeholder="Enter location"
              required
            />
          </div>
          <div className="flex space-x-2">
            <button className="bg-purple-500 text-white px-4 py-3 rounded-md">
              Update Employee
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