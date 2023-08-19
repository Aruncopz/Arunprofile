import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { ShowprojectComponent } from './showproject/showproject.component';
import { SkillspageComponent } from './skillspage/skillspage.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path:'card',component:CardComponent},
  {path:'showproject',component:ShowprojectComponent},
  {path:'skillspage',component:SkillspageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
