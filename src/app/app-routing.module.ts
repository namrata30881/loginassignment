import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PerentComponent } from './perent/perent.component';

const routes: Routes = [
  // {path:"",component:HomeComponent}
  {path:"",component:PerentComponent},
  {path:"home",component:HomeComponent}
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
