import React from "react";

function EmployeeList() {
  return (
    <div className="w-1/2 h-screen rounded-lg bg-br mt-3 flex flex-col items-center">
      <h1 className=" text-2xl font-semibold p-4">Employee List</h1>
      <input type="text" className="rounded-md w-3/5" />
      <ul className="h-full p-3 list-none">
        <li>name</li>
        <li>name</li>
      </ul>
    </div>
  );
}

export default EmployeeList;
