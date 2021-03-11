import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-project';
  username = 'Avinash';
  total_number = 10;
  logo_url="../assets/hackerrank_logo.png";

  totalComponents:string[] = ['first-component','got-component','directive-example'];
  selectedComponent!:string;

  selectComponent(component_name:string){

  	this.selectedComponent = component_name;
  	console.log(this.selectedComponent);

  }
}
