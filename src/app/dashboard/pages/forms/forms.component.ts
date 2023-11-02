import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      lastName: ['', Validators.required],
      birthDate: [null, Validators.required], // Agrega el campo para la fecha de nacimiento
      street: ['', Validators.required], // Agrega el campo para la calle
      city: ['', Validators.required], // Agrega el campo para la ciudad
      zipCode: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ],
      ], // Agrega el campo para el código postal
    });
  }

  public get nameControl() {
    return this.userForm.get('name');
  }

  public get birthDateControl() {
    return this.userForm.get('birthDate');
  }

  public get streetControl() {
    return this.userForm.get('street');
  }

  public get cityControl() {
    return this.userForm.get('city');
  }

  public get zipCodeControl() {
    return this.userForm.get('zipCode');
  }
}

