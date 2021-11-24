import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'connect', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'wl-spot', component: HomeComponent },
  { path: 'mint', component: HomeComponent },
  { path: '**',   redirectTo: '/connect', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
