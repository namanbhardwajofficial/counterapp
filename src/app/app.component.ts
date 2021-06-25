import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Counter-app';
  count:number=0;

  onIncreaseCount(){
    this.count=this.count+1;
    if(this.count>=10){
      this.count=10;
    }
  }
  onDecreaseCount(){
    this.count=this.count-1;
    if(this.count<=0){
      this.count=0;
    }
  }
  onResetCount(){
    this.count=0;
  }
}
