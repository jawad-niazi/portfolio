
    const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
      
  ];
  
 
  function displayEmployees() {
      const employeeDetails = employees
          .map(employee => 
              `<p>${employee.id}: ${employee.name} | Age: ${employee.age} | Department: ${employee.department} | Salary: $${employee.salary}</p>`)
          .join(""); // Fix `.join("")` placement
      document.getElementById("employeeDetails").innerHTML = employeeDetails;
  }
  
 
  function calculateTotalSalaries() {
      const totalSalaries = employees.reduce((total, employee) => total + employee.salary, 0);
      alert(`Total Salaries: $${totalSalaries}`);
  }
  
  function displayHREmployees() {
      const hrEmployees = employees.filter(employee => employee.department === "HR");
      const hrEmployeeDetails = hrEmployees
          .map(employee => 
              `<p>${employee.id}: ${employee.name} | Age: ${employee.age} | Department: ${employee.department} | Salary: $${employee.salary}</p>`)
          .join(""); // Fix `.join("")` placement
      document.getElementById("employeeDetails").innerHTML = hrEmployeeDetails || "<p>No HR employees found.</p>";
  }
  
  // Find employee by ID
  function findbyId() {
      const employeeId = parseInt(prompt("Enter Employee ID:"), 10);
      const foundEmployee = employees.find(employee => employee.id === employeeId); // Fix condition
      if (foundEmployee) {
          document.getElementById("employeeDetails").innerHTML = 
              `<p>${foundEmployee.id}: ${foundEmployee.name} | Age: ${foundEmployee.age} | Department: ${foundEmployee.department} | Salary: $${foundEmployee.salary}</p>`;
      } else {
          document.getElementById("employeeDetails").innerHTML = "<p>ID not found.</p>";
      }
  }
  