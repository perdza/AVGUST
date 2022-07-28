import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CitalacComponent } from './citalac/citalac.component';
import { LoginComponent } from './login/login.component';
import { PromenaLozinkeComponent } from './promena-lozinke/promena-lozinke.component';
import { RegistracijaComponent } from './registracija/registracija.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "registracija", component: RegistracijaComponent},
  {path: "admin-login", component: AdminLoginComponent},
  {path: "promenaLozinke", component: PromenaLozinkeComponent},
  {path: "citalac", component: CitalacComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
