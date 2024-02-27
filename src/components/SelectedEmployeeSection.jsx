import React from "react";
import avatar from "../assets/avatar.png";

function SelectedEmployeeSection({ selectedEmployee }) {
  return (
    <div className="h-2/3 bg-br rounded-lg flex flex-col">
      <div className="h-1/2 flex items-center">
        <img src={avatar} alt="avatar" className="w-1/3 p-3" />
        <div>
          <h1 className=" text-3xl">{selectedEmployee.lastName}</h1>
          <p className="text-2xl">{selectedEmployee.firstName}</p>
          <p>{selectedEmployee.position}</p>
          <p>{selectedEmployee.address}</p>
        </div>
      </div>
      <div className="p-3 flex justify-between">
        <div className="w-1/2">
          <p>
            <span className="font-semibold">Phone Number:</span>
            {selectedEmployee.phoneNumber}
          </p>
          <p>
            <span className="font-semibold">SSS Number:</span>
            {selectedEmployee.sss}
          </p>
          <p>
            <span className="font-semibold">Philhealth Number:</span>
            {selectedEmployee.philhealth}
          </p>
          <p>
            <span className="font-semibold">TIN Number:</span>
            {selectedEmployee.tin}
          </p>
          <p>
            <span className="font-semibold">Pagibig Number:</span>
            {selectedEmployee.pagibig}
          </p>
          <p>
            <span className="font-semibold">Status:</span>
            {selectedEmployee.status}
          </p>
          <p>
            <span className="font-semibold">Immediate Supervisor:</span>
            {selectedEmployee.immediateSupervisor}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SelectedEmployeeSection;
