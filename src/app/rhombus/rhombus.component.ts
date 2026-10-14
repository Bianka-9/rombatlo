// 
// * File: rhombus.component.ts
// * Author: Nagy Bianka
// * Copyright: 2026, Nagy Bianka
// * Group: Szoft II/N
// * Date: 2026-10-14
// * Github: https://github.com/Bianka-9/
// * Licenc: MIT
// 


import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-rhombus',
  styleUrl: './rhombus.component.css',
  templateUrl: './rhombus.component.html',
})

export class RhombusComponent {
  rhombusForm = new FormGroup({
    e_value: new FormControl(''),
    f_value: new FormControl('')
  });

  result = signal('');

  calculate(){
    const e = Number(this.rhombusForm.value.e_value);
    const f = Number(this.rhombusForm.value.f_value);

    if (e >= 1 && f >= 1){
      const area = (e*f)/2;
      this.result.set(String(area));
  }else {
    this.result.set("Minimum érték: 1")
   }
  }

  }
  

