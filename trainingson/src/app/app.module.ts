import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbdModalComponent } from './modal-component';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserListComponent, JkApp, JkApp2, JkApp3 } from './user-list/user-list.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { BrowserAnimationsModule } from 
    '@angular/platform-browser/animations';
  
import { MatButtonModule } from 
    '@angular/material/button';
import { MatButtonToggleModule } from 
    '@angular/material/button-toggle';
const appRoutes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'portuguese', component: JkApp },
  { path: 'french', component: JkApp2 },
  { path: 'cardPages', component: JkApp3 },
]
@NgModule({
  declarations: [
    AppComponent,
    NgbdModalComponent,
    JkApp,
    JkApp2,
    JkApp3,
    UserRegisterComponent,
    UserListComponent,
    CertificatesComponent,
    

  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, HttpClientModule,BrowserAnimationsModule, 
    MatButtonModule,
    MatButtonToggleModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
