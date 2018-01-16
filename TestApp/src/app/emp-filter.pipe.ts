import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee';

@Pipe({
  name: 'empFilter'
})
export class EmpFilterPipe implements PipeTransform {
	  transform(empList: Employee[], search: any): Employee[] {
	    if(search === undefined)
	    	return empList;
	    return empList.filter((e)=>e.empName.toLowerCase().includes(search.toLowerCase()));
	  }
}
