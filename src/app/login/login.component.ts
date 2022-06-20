import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm')
  loginForm!: NgForm;

  passWord: string = "";
  userName: string = "";

  constructor(private service:ServiceService) {
  }

  ngOnInit(): void {
  }
  login() {
    if (this.loginForm.invalid) {
      alert("Thông tin đăng nhập không hợp lệ.");
      return;
    }
    //gọi api check userName và passWord
    this.service.CheckLogin(this.userName,this.passWord).subscribe(data=>{
      if(data){
        alert("Đăng nhập thành công.");
      }
      else{
        alert("Thông tin tài khoản sai.");
      }
    })
  }
}
