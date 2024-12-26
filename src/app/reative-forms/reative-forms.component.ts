import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reative-forms',
  templateUrl: './reative-forms.component.html',
  styleUrls: ['./reative-forms.component.scss']
})
export class ReativeFormsComponent implements OnInit {

  // sampleLoginForm: FormGroup;

  // constructor() {
  //   this.sampleLoginForm = new FormGroup({
  //     username: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //     email: new FormControl('', [Validators.required,Validators.email,]),
  //     password: new FormControl('', [Validators.required, Validators.minLength(6)])
  //   });
  // }

  ngOnInit(): void {
  }

  // onSubmit() {
  //   if (this.sampleLoginForm.valid) {
  //     console.log('Form Submitted!', this.sampleLoginForm.value);
  //   }
  // }

  // submitForm(){
  //   if (this.sampleLoginForm.valid) {
  //     alert('Form Submited Successfully');
  //     this.clear();
  //   }else{
  //     alert('Please Input All Fields')
  //   }
  // }

  // clear(){
  //   this.sampleLoginForm.reset();
  // }

}
