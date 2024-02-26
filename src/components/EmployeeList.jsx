function EmployeeList({ employees, onEmployeeClick }) {
  return (
    <div className="w-1/2 h-screen rounded-lg bg-br mt-3 flex flex-col items-center">
      <h1 className=" text-2xl font-semibold p-4">Employee List</h1>
      <input type="text" className="rounded-md w-3/5" />
      <ul className="h-full p-3 list-none w-4/5 overflow-scroll">
        <div className="flex justify-between bg-orange-400 px-3">
          <h1>Last Name</h1>
          <h1>First Name</h1>
          <h1>Position</h1>
        </div>
        {employees.map((employee, index) => (
          <li
            className="flex justify-between bg-yellow-200 px-3 transition-all hover:bg-yellow-300 cursor-pointer"
            onClick={() => {
              onEmployeeClick(employee);
            }}
            key={index}
          >
            <h1>{employee.lastName}</h1>
            <h1>{employee.firstName}</h1>
            <h1>{employee.position}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
