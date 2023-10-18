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

import com.dao.DepartmentDAO;
import com.model.Department;

@RestController
public class DepartmentController {
	
	@Autowired
	DepartmentDAO deptDAO;

	@GetMapping("getAllDepartments")
	public List<Department> getAllDepartments() {
		return deptDAO.getAllDepartments();
	}
	
	@GetMapping("getDeptById/{id}")
	public Department getDeptById(@PathVariable("id") int deptId) {
		return deptDAO.getDeptById(deptId);
	}
	
	@GetMapping("getDeptByName/{name}")
	public Department getDeptByName(@PathVariable("name") String deptName) {
		return deptDAO.getDeptByName(deptName);
	}
	
	@PostMapping("registerDepartment")
	public Department registerDept(@RequestBody Department dept) {
		return deptDAO.registerDept(dept);
	}
	
	@PutMapping("updateDepartment")
	public Department updateDept(@RequestBody Department dept) {
		return deptDAO.updateDept(dept);
	}
	
	@DeleteMapping("deleteDeptById/{id}")
	public String deleteDept(@PathVariable("id") int deptId) {
		deptDAO.deleteDept(deptId);
		return "Department Deleted...";
	}
}














