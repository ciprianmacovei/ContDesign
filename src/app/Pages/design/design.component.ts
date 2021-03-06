import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

  selectedCategory:string;

  constructor() { }


  ngOnInit() {
    this.selectCategoryField();

  }

  selectCategoryField():void {
    for (let i of $('.selectC')){
      if (i.innerHTML === "CATEGORIE") {
        this.selectedCategory = "CATEGORIE";
        $(i).css('font-weight','bold');
      }
    }
  }

  selectCategory(event:Event):void {
    this.selectedCategory = (<HTMLElement>event.target).innerHTML;
    $('.selectC').css('font-weight','normal');
    $(event.target).css('font-weight','bold');
  }
}
