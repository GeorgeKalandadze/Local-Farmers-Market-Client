import { NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { NgForm, FormsModule, NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, NgIf, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  model: any = {};

  constructor() {}

  onSubmit() {
    console.log(this.model);
  }
}
