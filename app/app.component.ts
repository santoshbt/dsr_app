import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {URLSearchParams} from "@angular/http";

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
	}	

	ngOnInit() {
		this.route.queryParams.subscribe(
      		data => localStorage.setItem('employee_id', '1234')
		);
		console.log(localStorage.getItem('employee_id'))
  }
}