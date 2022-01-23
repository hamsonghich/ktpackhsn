import { Component, OnInit } from '@angular/core';
import {Tintuc} from '../../model/tintuc.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FirebaseServiceService} from '../../services/firebase-service.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-form-lienhe',
  templateUrl: './form-lienhe.component.html',
  styleUrls: ['./form-lienhe.component.scss']
})
export class FormLienheComponent implements OnInit {

  public isEdit = false;
  public formDataLienhe: Tintuc | any;
  public formContentLienhe: FormGroup;
  // tslint:disable-next-line:max-line-length
  constructor(public bd: FormBuilder, public firebaseService: FirebaseServiceService, public matDialogRef: MatDialogRef<FormLienheComponent>) {
    this.formContentLienhe = this.bd.group({
      mapLink : [''],
      nameCompany: [''],
      trustTitle: [''],
      phoneNumber: [''],
      email: [''],
      addressCompany: [''],
    });
  }

  ngOnInit(): void {
    if (this.isEdit){
      // su dung patchValue cua FormReactive de sua du lieu cua form (trong TH nay ta thay the luon bang mot data moi)
      this.formContentLienhe.patchValue(this.formDataLienhe);
    }
  }
  public onSubmit(): void{
    this.firebaseService.createFunctionalityObject(this.formContentLienhe.value, '/lienhe');
    console.log(this.formContentLienhe.value);
    this.matDialogRef.close();
  }
  public saveRowData(): any{
    this.matDialogRef.close({isEdit: true, data: this.formContentLienhe.value});
  }
}
