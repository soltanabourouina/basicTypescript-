import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  inputs: []
})
export class FavoriteComponent implements OnInit {
@Input('is-favorite') isSelected: Boolean = false;
@Output('change') click = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
 
  myFavorite(){
    this.isSelected=!this.isSelected;
    //this.click.emit(this.isSelected);
    this.click.emit({newState:this.isSelected});
  }

}
