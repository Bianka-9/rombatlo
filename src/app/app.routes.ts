// 
// * File: app.routes.ts
// * Author: Nagy Bianka
// * Copyright: 2026, Nagy Bianka
// * Group: Szoft II/N
// * Date: 2026-10-14
// * Github: https://github.com/Bianka-9/
// * Licenc: MIT
// 

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RhombusComponent } from './rhombus/rhombus.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'rhombus', component: RhombusComponent }
];
