import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listofmusic',
  templateUrl: './listofmusic.component.html',
  styleUrls: ['./listofmusic.component.scss']
})
export class ListofmusicComponent implements OnInit {

  picture =[
    {
      pic:'assets/img/ben-konfrst.jpg',
      title : 'Benkon of Circus'
    },
    {
      pic:'assets/img/backstage.png',
      title : 'Backstage of stadium'
    },
    {
      pic :'assets/img/bg8.jpg',
      title : 'Circus of Mountain'
    },
    {
      pic:'assets/img/claudia-ramirez.jpg',
      title : 'Claudia of Guitar'
    },
    {
      pic :'assets/img/bg7.jpg',
      title : 'Charlie of style'
    },
    {
      pic : 'assets/img/bg4.jpg',
      title : 'Emily the bird of kindness'
    }

  ]
  cardimage =[
    {
    
      imageUrl:'assets/img/book7.jpg',
      
    },
    {
    
      imageUrl:'assets/img/book8.jpg',
     
    },
    {
      imageUrl:'assets/img/book9.jpg',
      
    },
    {
    
      imageUrl:'assets/img/book10.jpg',
      
    },
    {
      
      imageUrl:'assets/img/book4.jpg',
      
    },
    {
    
      imageUrl:'assets/img/book6.jpg',
      
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
