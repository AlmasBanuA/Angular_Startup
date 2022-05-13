import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name="Almas";
  // title="HelloWorld";
  imgURL="../assets/BridgeLab.png"
  userName:String="";
  
  onchangeImg(){
    console.log(this.name);

  }

  onchangeCall(){
    this.name="Sara";
    console.log(this.userName);
  }

  }

