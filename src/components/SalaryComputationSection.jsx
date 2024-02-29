function SalaryComputationSection({
  selectedEmployee,
  calculateSalary,
  storedGrossSalary,
  storedNetSalary,
  inputValue,
  setInputValue,
}) {
  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("button clicked");
    console.log(`input Value: ${inputValue}`);
    console.log(`riceSubsidy: ${selectedEmployee.riceSubsidy}`);
    console.log(`phoneAllowance: ${selectedEmployee.phoneAllowance}`);
    console.log(`hourly rate: ${selectedEmployee.hourlyRate}`);
    calculateSalary(
      inputValue,
      selectedEmployee.riceSubsidy,
      selectedEmployee.phoneAllowance,
      selectedEmployee.clothingAllowance,
      selectedEmployee.hourlyRate
    );
    setInputValue("");
  };
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
          <form className="flex-col" onSubmit={handleSubmit}>
            <div className="flex">
              <label>Hours Worked: </label>
              <input
                type="number"
                value={inputValue}
                onChange={handleChange}
                placeholder="input number of hours"
              />
            </div>
            <button>Compute Salary</button>
          </form>
          <div>
            <p>Gross Salary: {storedGrossSalary}</p>
            <p>Net Salary: {storedNetSalary}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalaryComputationSection;
