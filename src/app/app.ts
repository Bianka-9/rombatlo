// 
// * File: app.ts
// * Author: Nagy Bianka
// * Copyright: 2026, Nagy Bianka
// * Group: Szoft II/N
// * Date: 2026-10-14
// * Github: https://github.com/Bianka-9/
// * Licenc: MIT
// 

import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('rombatlo');
}
