import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './Pages/home-page/home-page.component';
import {AboutComponent} from './Pages/about/about.component';
import {ContactComponent} from './Pages/contact/contact.component';
import {TeamComponent} from './Pages/team/team.component';
import {DesignComponent} from './Pages/design/design.component';

const routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'team', component: TeamComponent},
  {path: 'design', component: DesignComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
