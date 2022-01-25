import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FirebaseServiceService} from '../../services/firebase-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthServiceService} from '../../services/auth-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  public iconImg: any;
  public hide = true;
  public accountAdmin: FormGroup| any;
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<FormLoginComponent>, public firebaseService: FirebaseServiceService,
              public fb: FormBuilder, public authService: AuthServiceService, public router: Router,
             ) {
    this.firebaseService.readFunctionalityObject('/trangchu').subscribe((res: { imgLogo: any; }) => {
      this.iconImg = res.imgLogo;
    });
    this.accountAdmin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }
  public login(): any {
    this.firebaseService.readFunctionalityObject('/account').subscribe((item: { username: any; password: any; }) => {
      console.log(this.accountAdmin.value);
      const username = this.accountAdmin.controls.username.value;
      const password = this.accountAdmin.controls.password.value;
      if (username === item.username && password === item.password){
        this.authService.login();
        this.router.navigateByUrl('/admin');
        alert('Đăng nhập quyền quản trị viên thành công !');
      }
      else{
        alert('Đăng nhập thất bại ');
      }
      this.dialogRef.close();
    });
  }
  public cancel(): any{
    this.dialogRef.close();
  }
}
