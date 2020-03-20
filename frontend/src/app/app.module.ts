import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { NewpostComponent } from './newpost/newpost.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ContactsComponent } from './contacts/contacts.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BlogsComponent,
    MyblogsComponent,
    NewpostComponent,
    ContactsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    HttpClientModule,
    CKEditorModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
