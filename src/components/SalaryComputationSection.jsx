import React from "react";

function SalaryComputationSection({ selectedEmployee }) {
  return (
    <div className="h-1/3 bg-br rounded-lg p-2">
      <h1 className=" text-2xl font-semibold text-center">
        Salary Computation
      </h1>
      <div className="flex justify-between">
        <div className="w-1/2">
          <p>
            <span className="font-semibold">Basic Salary: </span>₱
            {selectedEmployee.basicSalary}
          </p>
          <p>
            <span className="font-semibold">Rice Subsidy:</span>₱
            {selectedEmployee.riceSubsidy}
          </p>
          <p>
            <span className="font-semibold">Phone Allowance:</span>
            {selectedEmployee.phoneAllowance}
          </p>
          <p>
            <span className="font-semibold">Clothing Allowance:</span>
            {selectedEmployee.clothingAllowance}
          </p>
          <p>
            <span className="font-semibold">Gross Semi-Monthly Rate:</span>₱
            {selectedEmployee.grossSemiMonthlyRate}
          </p>
          <p>
            <span className="font-semibold">Hourly Rate:</span>₱
            {selectedEmployee.hourlyRate}
          </p>
        </div>
        <div className="w-1/2">
          <form>
            <label>Hours Worked: </label>
            <input type="number" />
          </form>
          <div>
            <p>Gross Salary:</p>
            <p>Net Salary:</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalaryComputationSection;
