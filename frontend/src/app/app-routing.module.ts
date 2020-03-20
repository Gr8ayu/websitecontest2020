import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NewpostComponent } from './newpost/newpost.component'
import { BlogsComponent } from './blogs/blogs.component'
import { ContactsComponent } from './contacts/contacts.component'
import { ChartComponent } from './chart/chart.component';
import { ActivitiesComponent } from './activities/activities.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'newblogs', component: NewpostComponent, canActivate:[AuthGuard]},
  { path: 'blogs', component: BlogsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'activities', component: ActivitiesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})

export class AppRoutingModule { 
}
