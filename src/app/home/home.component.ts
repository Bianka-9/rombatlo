// 
// * File: home.component.ts
// * Author: Nagy Bianka
// * Copyright: 2026, Nagy Bianka
// * Group: Szoft II/N
// * Date: 2026-10-14
// * Github: https://github.com/Bianka-9/
// * Licenc: MIT
// 


import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-home',
  styleUrl: './home.component.css',
  templateUrl: './home.component.html',
})
export class HomeComponent {}
