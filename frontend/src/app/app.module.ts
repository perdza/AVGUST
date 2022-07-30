import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { PromenaLozinkeComponent } from './promena-lozinke/promena-lozinke.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CitalacComponent } from './citalac/citalac.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistracijaComponent,
    LoginComponent,
    AdminComponent,
    AdminLoginComponent,
    PromenaLozinkeComponent,
    CitalacComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
