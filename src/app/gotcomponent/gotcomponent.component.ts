import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gotcomponent',
  templateUrl: './gotcomponent.component.html',
  styleUrls: ['./gotcomponent.component.css']
})
export class GOTComponentComponent implements OnInit {

	GOTCharacter!:string[];
	GOTCharacterFirstname:string[]=['John','Arya','Cercie','Danerys'];
	GOTCharacterLastname:string[]=['Snow','Stark','Lannister','Targarryn'];
	stopSwitch:any;
	stopSwitchStatus = true;
	twoWayData = '';

	i=0;

	@Input() imageURLChild!:string;


	stopSwitchFirstandLastname(){
		clearInterval(this.stopSwitch);
		this.stopSwitchStatus = true;
	}

	switchFirstandLastname(){
	  	this.stopSwitch=setInterval(()=>{

  		if(this.i%2==0){
  			this.GOTCharacter=this.GOTCharacterFirstname;
  			console.log('if');

  		}else{
  			this.GOTCharacter=this.GOTCharacterLastname;
  			console.log('else');
  		}
  		this.i++;
  	}, 2000)
  	this.stopSwitchStatus=false;		
	}


  constructor() { 
  	this.GOTCharacter=this.GOTCharacterFirstname;
  }

  ngOnInit(): void {
  }

}
