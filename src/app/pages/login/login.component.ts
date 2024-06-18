import { NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { NgForm, FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  model: any = {};

  constructor() {}

  onSubmit() {
    console.log(this.model);
  }
}