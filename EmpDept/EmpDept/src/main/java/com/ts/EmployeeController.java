package com.ts;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dao.EmployeeDAO;
import com.model.Employee;

@RestController
public class EmployeeController {

	@Autowired
	EmployeeDAO empDAO;
	
	
	@GetMapping("getAllEmployees")
	public List<Employee> getAllEmployees() {
		return empDAO.getAllEmployees();
	}
	
	@GetMapping("getEmpById/{id}")
	public Employee getEmpById(@PathVariable("id") int empId) {
		return empDAO.getEmpById(empId);
	}
	
	@GetMapping("getEmpByName/{name}")
	public Employee getEmpByName(@PathVariable("name") String empName) {
		return empDAO.getEmpByName(empName);
	}
	
	@PostMapping("registerEmployee")
	public Employee registerEmp(@RequestBody Employee emp) {
		return empDAO.registerEmp(emp);
	}
	
	@PutMapping("updateEmployee")
	public Employee update(@RequestBody Employee emp) {
		return empDAO.updateEmp(emp);
	}
	
	@DeleteMapping("deleteEmpById/{id}")
	public String deleteEmpById(@PathVariable("id") int empId) {
		empDAO.deleteEmpById(empId);
		return "Employee Record Deleted...";
	}
	
}
