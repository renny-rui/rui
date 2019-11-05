import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginStatus = false;
  returnUrl: string;
  tokenStatic: string;
  remember: boolean;
  form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    remember: new FormControl(true),
  });
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.remember = true;
  }

  ngOnInit() {
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
      this.form.get('username').setValue(localStorage.getItem('username'));
      this.form.get('password').setValue(localStorage.getItem('password'));
    } else {
      this.remember = false;
    }
  }
  submit() {
    this.loginStatus = true;
    if (this.form.valid) {
      if (this.form.get('username').value === 'zr' && this.form.get('password').value === '123') {
        if (this.remember) {
          console.log(this.remember);
          localStorage.setItem('username', this.form.get('username').value);
          localStorage.setItem('password', unescape(this.form.get('password').value));
        } else {
          localStorage.clear();
        }
        this.router.navigateByUrl('/todo');
      } else {
        alert('用户名或密码错误');
      }
    }
  }
}

