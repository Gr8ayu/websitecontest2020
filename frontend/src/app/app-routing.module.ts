import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NewpostComponent } from './newpost/newpost.component'
import { BlogsComponent } from './blogs/blogs.component'
import { ContactsComponent } from './contacts/contacts.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'newblogs', component: NewpostComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'login' , component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
