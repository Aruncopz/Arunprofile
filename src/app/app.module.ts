import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { ShowprojectComponent } from './showproject/showproject.component';
import { SkillspageComponent } from './skillspage/skillspage.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    ShowprojectComponent,
    SkillspageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
