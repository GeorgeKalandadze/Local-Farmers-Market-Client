import { NgIf } from '@angular/common';
import { Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule, NgIf, RouterLink],
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