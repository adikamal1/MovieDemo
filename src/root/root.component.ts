import { Component } from '@angular/core';

@Component({
    selector:'root-comp',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.scss']
  })
export class RootComponent{

  public title:string;
  constructor(){
  this.title="Top rated movies";
  }
  
}