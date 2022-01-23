import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FirebaseServiceService} from '../../services/firebase-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-social',
  templateUrl: './form-social.component.html',
  styleUrls: ['./form-social.component.scss']
})
export class FormSocialComponent implements OnInit {
  public isEdit = false;
  public formContentSocial: FormGroup;
  public formDataSocial: any;
  constructor(public dialogRef: MatDialogRef<FormSocialComponent>, public firebaseService: FirebaseServiceService,
              public fb: FormBuilder) {
    this.formContentSocial = this.fb.group({
      facebook: ['', [Validators.required]],
      messenger: ['', [Validators.required]],
      zalo: ['', [Validators.required]],
      map: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    if (this.isEdit) {
      // su dung patchValue cua FormReactive de sua du lieu cua form (trong TH nay ta thay the luon bang mot data moi)
      this.formContentSocial.patchValue(this.formDataSocial);
    }
  }
  public onSubmit(): void{
    this.firebaseService.createFunctionalityObject(this.formContentSocial.value, '/social');
    console.log(this.formContentSocial.value);
    this.dialogRef.close();
  }
  public saveRowData(): any{
    this.dialogRef.close({isEdit: true, data: this.formContentSocial.value});
  }
}
