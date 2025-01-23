import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { RegistroComponent } from './pages/registro/registro.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'principal', component:PrincipalComponent},
    {path:'registro', component:RegistroComponent},
    {path:'**', redirectTo:'login'}
];
