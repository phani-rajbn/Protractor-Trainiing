import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-component',
  templateUrl: './calc-component.component.html',
  styleUrls: ['./calc-component.component.css']
})
export class CalcComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

		
  public choice:string;
  public value1:number = 123;
  public value2:number = 234;
  public result = 0;

  //add Few more functions to perform the math operations...
  addFunc(){
    this.result = this.value1 + this.value2;
  }

  subFunc(){
    this.result = this.value1 - this.value2;
  }

  mulFunc(){
    this.result = this.value1 * this.value2;
  }

  divFunc(){
    this.result = this.value1 / this.value2;
  }

  process(){
  	switch(this.choice){
  		case "Add":
  			this.addFunc();
  			break;
  		case "Sub":
  			this.subFunc();
  			break;
  		case "Mul":
  			this.mulFunc();
  			break;
  		case "Div":
  			this.divFunc();
  			break;		
  	}
  }
}
