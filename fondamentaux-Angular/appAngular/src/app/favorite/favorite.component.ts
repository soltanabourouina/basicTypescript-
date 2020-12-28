import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
isFavorite:Boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
 
  change(){
    this.isFavorite=!this.isFavorite;

  }

}
