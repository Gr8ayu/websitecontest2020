import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RouterModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { NewpostComponent } from './newpost/newpost.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ContactsComponent } from './contacts/contacts.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ChartComponent } from './chart/chart.component';
import { ActivitiesComponent } from './activities/activities.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';

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
    FooterComponent,
    ChartComponent,
    ActivitiesComponent,
    SafeHtmlPipe
  ],
  imports: [
    HttpClientModule,
    CKEditorModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [AuthService, AuthGuard,   { provide: APP_BASE_HREF, useValue: '/' },
        { provide: LocationStrategy, useClass: HashLocationStrategy }	],
  bootstrap: [AppComponent]
})
export class AppModule { }
