package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Employee;

@Service
public class EmployeeDAO {
	
	@Autowired
	EmployeeRepository empRepo;

	public List<Employee> getAllEmployees() {
		return empRepo.findAll();
	}

	public Employee getEmpById(int empId) {
		return empRepo.findById(empId).orElse(null);
	}

	public Employee getEmpByName(String empName) {
		return empRepo.findByName(empName);
	}

	public Employee registerEmp(Employee emp) {
		return empRepo.save(emp);
	}

	public Employee updateEmp(Employee emp) {
		return empRepo.save(emp);
	}

	public void deleteEmpById(int empId) {
		empRepo.deleteById(empId);
	}
	
}
