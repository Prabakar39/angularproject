import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardimageComponent } from './cardimage/cardimage.component';
import { ListofmusicComponent } from './listofmusic/listofmusic.component';
import {MatCardModule} from '@angular/material/card';
import { ListdescriptionComponent } from './listdescription/listdescription.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignuppComponent } from './signupp/signupp.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardimageComponent,
    ListofmusicComponent,
    ListdescriptionComponent,
    FooterComponent,
    LoginComponent,
    SignuppComponent,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
