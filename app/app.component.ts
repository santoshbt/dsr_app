import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit{
	private date;
	constructor(private route: ActivatedRoute){		
		this.date =  new Date(); 
		route.queryParams.subscribe(
      		data => 
			  {
				  localStorage.setItem('employee_id', data['employee_id']);
				  
				  console.log(data['employee_id']);
				  console.log(localStorage.getItem('employee_id'));
			  }
		);
	}
	// @Input() 
	employee_id: string = localStorage.getItem('employee_id')	
	ngOnInit() {
		
    }
}