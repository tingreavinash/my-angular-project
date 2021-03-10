import { Component } from '@angular/core';
@Component({
    selector: "app-first",
    templateUrl: 'first.component.html',
    styleUrls: ['first.component.css']
})

export class FirstComponent{

	headingTwo:string='Network Element is displayed';
	logo_url:string = '../../assets/hackerrank_logo.png';

	returnString(){
		return "Function call";
	}

	changeValue(){
		this.headingTwo = "The value is changed.";
	}

}
