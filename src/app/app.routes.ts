import { Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { HomeComponent } from './pages/home/home.component';
import { animate } from '@angular/animations';

export const routes: Routes = [
    {path:'home', component: HomeComponent, data: {animation: 'Home'}},
    {path:'sobre', component: SobreComponent,  data: {animation: 'Sobre'}},
    {path:'', redirectTo: 'home', pathMatch: 'full'},
];
