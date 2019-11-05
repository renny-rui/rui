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
  form: FormGroup = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
  }
submit(){
  this.loginStatus=true;
  if(this.form.valid){
    if(this.form.get('username').value ==='zr' &&this.form.get('password').value === '123'){
      console.log(this.form);
      this.router.navigateByUrl('');
    }else{
      alert('用户名或密码错误');
    }
  }
}
}
export class LoginService{
  isDisplayMainNav: boolean;
  isLoggedIn = false;
  // store the URL so we can redirect after logging in
  redirectUrl: string;
}

