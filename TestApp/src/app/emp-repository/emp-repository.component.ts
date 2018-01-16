import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmpFilterPipe } from '../emp-filter.pipe';
@Component({
  selector: 'app-emp-repository',
  templateUrl: './emp-repository.component.html',
  styleUrls: ['./emp-repository.component.css']
})
export class EmpRepositoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  		this.addEmp(new Employee(123, 'Phaniraj','Bangalore'));
  		this.addEmp(new Employee(124, 'Vinod','Shimoga'));
  		this.addEmp(new Employee(125, 'Banu','Bangalore'));
  		this.selectedEmp = new Employee(0,'','');
  }
	  public selectedEmp : Employee;
	  public empList: Employee[] =[];
	  addEmp(emp){
	  	this.empList.push(emp);
	  }

	  getAll(){
	    return this.empList;
	  }
	  findEmp(id){
	     this.empList.forEach((no) =>{
	     	if(no.empID == id)
	     		this.selectedEmp = no;
	     })
	  }
}
