import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FirebaseServiceService} from '../../services/firebase-service.service';
import {MatDialogRef} from '@angular/material/dialog';
import {Tintuc} from '../../model/tintuc.model';
import { AngularEditorConfig } from '@kolkov/angular-editor';
@Component({
  selector: 'app-form-tintuc',
  templateUrl: './form-tintuc.component.html',
  styleUrls: ['./form-tintuc.component.scss']
})
export class FormTintucComponent implements OnInit {
  public isEdit = false;
  public formDataTintuc: Tintuc | any;
  public formContentTintuc: FormGroup;
  constructor(public bd: FormBuilder, public firebaseService: FirebaseServiceService, public matDialogRef: MatDialogRef<FormTintucComponent>) {
    this.formContentTintuc = this.bd.group({
    param1 : [''],
    param2: [''],
    param3: [''],
    param4: [''],
    param5: [''],
    imgLink: [''],
  });
  }

  ngOnInit(): void {
    if (this.isEdit){
      // su dung patchValue cua FormReactive de sua du lieu cua form (trong TH nay ta thay the luon bang mot data moi)
      this.formContentTintuc.patchValue(this.formDataTintuc);
    }
  }
  public onSubmit(): void{
    this.firebaseService.createFunctionalityObject(this.formContentTintuc.value, '/tintuc');
    console.log(this.formContentTintuc.value);
    this.matDialogRef.close();
  }
  public saveRowData(): any{
    this.matDialogRef.close({isEdit: true, data: this.formContentTintuc.value});
  }
}
