import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardimage',
  templateUrl: './cardimage.component.html',
  styleUrls: ['./cardimage.component.scss']
})
export class CardimageComponent implements OnInit {
  cardimage =[
    {
      id:1,
      imageUrl:'assets/img/book6.jpg',
      title : 'The Ocean Lane'
    },
    {
      id:2,
      imageUrl:'assets/img/book1.jpg',
      title : 'Kite Runnner'
    },
    {
      id:3,
      imageUrl:'assets/img/book2.jpg',
      title : 'Give Me Some'
    },
    {
      id:4,
      imageUrl:'assets/img/book3.jpg',
      title : 'Find Out Who'
    },
    {
      id:5,
      imageUrl:'assets/img/book4.jpg',
      title : 'Mocking Bird'
    },
    {
      id:6,
      imageUrl:'assets/img/book5.jpg',
      title : 'Hidden Deep'
    },
  ]
  
  constructor() { 
  }

  ngOnInit() {
  }

}
