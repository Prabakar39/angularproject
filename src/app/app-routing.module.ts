import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListofmusicComponent } from './listofmusic/listofmusic.component';
import { CardimageComponent } from './cardimage/cardimage.component';
import { ListdescriptionComponent } from './listdescription/listdescription.component';
import { LoginComponent } from './login/login.component';
import { SignuppComponent } from './signupp/signupp.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {
    path:"",
    component : HeaderComponent, 
    children : [
      {
        path : "",
        component : CardimageComponent,
      },
      {
        path : 'About',
        component : AboutComponent,
      },
      {
        path:'listofmusic',
        component: ListofmusicComponent
      },
      {
        path :'listdescription',
        component : ListdescriptionComponent,
      },
    ]
  },
  
  {
    path : 'login',
    component : LoginComponent,
  },
  {
    path : 'signupp',
    component : SignuppComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
