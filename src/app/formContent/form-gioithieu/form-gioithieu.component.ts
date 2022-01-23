import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FirebaseServiceService} from '../../services/firebase-service.service';
import {MatDialogRef} from '@angular/material/dialog';
import {Tintuc} from '../../model/tintuc.model';

@Component({
  selector: 'app-form-gioithieu',
  templateUrl: './form-gioithieu.component.html',
  styleUrls: ['./form-gioithieu.component.scss']
})
export class FormGioithieuComponent implements OnInit {
  public isEdit = false;
  public formDataGioithieu: Tintuc | any;
  public formContentGioithieu: FormGroup;
  // tslint:disable-next-line:max-line-length
  constructor(public bd: FormBuilder, public firebaseService: FirebaseServiceService, public matDialogRef: MatDialogRef<FormGioithieuComponent>) {
    this.formContentGioithieu = this.bd.group({
      nameCompany : [''],
      nameTrust: [''],
      nameIntro: [''],
      historyCompany: [''],
      commitCompany: [''],
      adviseCompany: [''],
      imgLink: [''],
    });
  }

  ngOnInit(): void {
    if (this.isEdit){
      // su dung patchValue cua FormReactive de sua du lieu cua form (trong TH nay ta thay the luon bang mot data moi)
      this.formContentGioithieu.patchValue(this.formDataGioithieu);
    }
  }
  public onSubmit(): void{
    this.firebaseService.createFunctionalityObject(this.formContentGioithieu.value, '/gioithieu');
    console.log(this.formContentGioithieu.value);
    this.matDialogRef.close();
  }
  public saveRowData(): any{
    this.matDialogRef.close({isEdit: true, data: this.formContentGioithieu.value});
  }
}
