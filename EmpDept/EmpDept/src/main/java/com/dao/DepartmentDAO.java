package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Department;

@Service
public class DepartmentDAO {
	
	@Autowired
	DepartmentRepository deptRepo;

	public List<Department> getAllDepartments() {
		return deptRepo.findAll();
	}

	public Department getDeptById(int deptId) {
		return deptRepo.findById(deptId).orElse(null);
	}

	public Department getDeptByName(String deptName) {
		return deptRepo.findByName(deptName);
	}

	public Department registerDept(Department dept) {
		return deptRepo.save(dept);
	}

	public Department updateDept(Department dept) {
		return deptRepo.save(dept);
	}

	public void deleteDept(int deptId) {
		deptRepo.deleteById(deptId);
	}
	
	

}







