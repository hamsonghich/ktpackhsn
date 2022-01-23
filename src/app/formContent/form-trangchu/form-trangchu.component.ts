import {Component, OnInit} from '@angular/core';
import {Tintuc} from '../../model/tintuc.model';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FirebaseServiceService} from '../../services/firebase-service.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-form-trangchu',
  templateUrl: './form-trangchu.component.html',
  styleUrls: ['./form-trangchu.component.scss']
})
export class FormTrangchuComponent implements OnInit {

  public isEdit = false;
  public formDataTrangchu: Tintuc | any;
  public formContentTrangchu: FormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(public bd: FormBuilder, public firebaseService: FirebaseServiceService, public matDialogRef: MatDialogRef<FormTrangchuComponent>) {
    this.formContentTrangchu = this.bd.group({
      imgLogo: ['', [Validators.required]],
      content1New: this.bd.array([
        this.bd.group({
          name: ['', [Validators.required]],
          link: ['', [Validators.required]]
        }),
        this.bd.group({
          name: ['', [Validators.required]],
          link: ['', [Validators.required]]
        }),
        this.bd.group({
          name: ['', [Validators.required]],
          link: ['', [Validators.required]]
        }),
        this.bd.group({
          name: ['', [Validators.required]],
          link: ['', [Validators.required]]
        }),
      ]),
      content1Img: this.bd.array([
        this.bd.group({
          name: [''], link: [''],
        }),
        this.bd.group({
          name: [''], link: [''],
        }),
        this.bd.group({
          name: [''], link: [''],
        })
      ]),
      content1Video: [''],

      content2Title: this.bd.group({
          title1: ['Tin Tức', [Validators.required]],
          title2: ['Công ty cổ phần KT-PACK', [Validators.required]],
          title3: ['TP: Hưng Yên || HOTLINE: +(84) 393483309', [Validators.required]],
          imgMain: ['', Validators.required],
        }),
      content3Title: this.bd.group({
          title1: ['Thùng nhựa danpla', [Validators.required]],
          imgLinkPromotion: [''],
        }),
      content4Title: this.bd.group({
        title1: ['Vách nhựa Danpla', [Validators.required]],
        imgLinkPromotion: ['', [Validators.required]],
      }),
      content5Title: this.bd.group({
        title1: ['Xốp Pe Foam Eva', [Validators.required]],
        imgLinkPromotion: ['', [Validators.required]],
      }),
      content6Title: this.bd.group({
        title1: ['Xốp bóng khí', [Validators.required]],
        imgLinkPromotion: ['', [Validators.required]],
      }),
    });
  }

  ngOnInit(): void {
    if (this.isEdit) {
      // su dung patchValue cua FormReactive de sua du lieu cua form (trong TH nay ta thay the luon bang mot data moi)
      this.formContentTrangchu.patchValue(this.formDataTrangchu);
    }
  }

  public onSubmit(): void {
    this.firebaseService.createFunctionalityObject(this.formContentTrangchu.value, '/trangchu');
    console.log(this.formContentTrangchu.value);
    this.matDialogRef.close();
  }

  public saveRowData(): any {
    this.matDialogRef.close({isEdit: true, data: this.formContentTrangchu.value});
  }

  // tslint:disable-next-line:typedef
  get content1New(){
    return this.formContentTrangchu.controls.content1New as FormArray;
  }
  // tslint:disable-next-line:typedef
  get content1Img(){
    return this.formContentTrangchu.controls.content1Img as FormArray;
  }

}
