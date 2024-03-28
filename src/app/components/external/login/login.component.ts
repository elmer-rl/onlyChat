import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export default class LoginComponent implements OnInit {

  register = false;
  loginForm!: FormGroup;

  constructor(private authService: AuthService, private fb:FormBuilder, private router:Router) {}

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.loginForm = this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required],
      userName:['']
    })
  }

  login(){
    this.authService.login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value).then((res) => {
      let token = res.user?.refreshToken;
      sessionStorage.setItem('acccessToken', token!);
      this.router.navigateByUrl('messages')
    }).catch((error:any) => {
      Swal.fire({
        title: "Alerta!",
        text: error,
        icon: "info", 
        confirmButtonText:'Aceptar',
        customClass: {
          popup: 'my-class-popup',
          title: 'my-class-title ',
          cancelButton: 'my-class-btn-cancel',
          confirmButton: 'my-class-btn-confirm'
      }
    });
    });
  }

  registerAccount() {
    this.authService.register
    (this.loginForm.get('email')?.value,
    this.loginForm.get('password')?.value,
    this.loginForm.get('userName')?.value)
    .then((res) => {
        this.login();
    }).catch((error:any) => {
      Swal.fire({
        title: "Alerta!",
        text: error,
        icon: "info",
        confirmButtonText:'Aceptar',
        customClass: {
          popup: 'my-class-popup',
          title: 'my-class-title ',
          cancelButton: 'my-class-btn-cancel',
          confirmButton: 'my-class-btn-confirm'
      }
      });
    });
  }
}
