import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { ShowprojectComponent } from './showproject/showproject.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'card',component:CardComponent},
  {path:'showproject',component:ShowprojectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
