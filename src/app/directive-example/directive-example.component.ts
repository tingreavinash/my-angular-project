import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent implements OnInit {

	dcCharacters:string[] = ['Batman','Superman','Wonder Woman', 'Flash'];
	index:number = 0;
	toggleHerosState:boolean = true;

	headingTwo:string = "Good day!";

	selectedHero!:string;
	myStyle = {};
	color!:string;
	setStyleFlag:boolean = true;
	currentCSSClass:string = 'styleRed';
	inputColor:string = 'red';

	changeCSSClass(){
		if(this.currentCSSClass == 'styleRed'){
			this.currentCSSClass = 'styleWhite';
		}else{
			this.currentCSSClass = 'styleRed';
		}

		console.log(this.currentCSSClass);
	}

	setStyle(){
		this.setStyleFlag = !this.setStyleFlag;
		this.myStyle = {
			'font-weight': this.setStyleFlag ? 'bold': 'normal',
			'font-size' : this.setStyleFlag ? '24px' : '20px',
			'color' : this.setStyleFlag ? this.generateRandomColor() : 'black'
		}


	}

	toggleStyle(){
		this.setStyleFlag = !this.setStyleFlag;
		console.log(this.setStyleFlag);
		this.setStyle();
	}

	generateRandomColor(){
		this.color = '#';
		var letters = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

		for(var i=0;i<6;i++){
			this.color += letters[Math.floor(Math.random()*16) ];
		}
		console.log('Color: '+this.color);
		return this.color;
	}

	toggleHeros(){
		this.toggleHerosState = !this.toggleHerosState;
		console.log(this.toggleHerosState);
	}

	setSelectedHero(hero:string){
		this.selectedHero = hero;
		console.log("selected hero: "+this.selectedHero);
	}

  constructor() {
  	
  }

  ngOnInit(): void {
  }

}
