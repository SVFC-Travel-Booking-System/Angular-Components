import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayhelloworldComponent } from './components/displayhelloworld/displayhelloworld.component';
import { ShowhellobuttonComponent } from './components/showhellobutton/showhellobutton.component';
import { DisplaynameComponent } from './components/displayname/displayname.component';


const routes: Routes = [
  { path: 'display-hello-world', component: DisplayhelloworldComponent },
  { path: 'show-hello-button', component: ShowhellobuttonComponent },
  { path: 'display-name', component: DisplaynameComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
