import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FirebaseServiceService} from '../../services/firebase-service.service';
import {MatDialogRef} from '@angular/material/dialog';
import {DataServicesService} from '../../services/data-services.service';
import {AngularEditorConfig} from '@kolkov/angular-editor';

@Component({
  selector: 'app-form-xoppefoameva',
  templateUrl: './form-xoppefoameva.component.html',
  styleUrls: ['./form-xoppefoameva.component.scss']
})
export class FormXoppefoamevaComponent implements OnInit {
  public typeXoppefoameva: any[] = [];
  // tslint:disable-next-line:max-line-length
  constructor(public fb: FormBuilder, public firebaseService: FirebaseServiceService, public matDialogRef: MatDialogRef<FormXoppefoamevaComponent>,
              public dataServicesService: DataServicesService) {
    this.firebaseService.readFunctionalityObject('/tieudeMain').subscribe((res: any) => {
      this.typeXoppefoameva = res.xoppefoameva;
    });
    this.formContentXopPeFoamEva = this.fb.group({
      addCart: ['false'],
      typeName: this.fb.group({
        name: ['', [Validators.required]],
        id: ['xoppefoameva'],
      }),
      id: this.fb.group({
        name: ['', [Validators.required]],
        link: ['', [Validators.required]],
      }),
      address: this.fb.group({
        name: ['Hưng Yên', [Validators.required]],
      }),
      price: this.fb.group({
        name: ['Liên hệ', [Validators.required]],
      }),
      sellNumber: this.fb.group({
        name: [`${this.dataServicesService.getRandomInt(1, 3)}`, [Validators.required, Validators.pattern('^\\d+\\.?\\d*$')]],
      }),
      like: ['false'],
      star: this.fb.group({
        number: [`${this.dataServicesService.getRandomInt(4, 5)}`, [Validators.required, Validators.pattern('^\\d+\\.?\\d*$')]],
      }),
      discount: this.fb.group({
        number: [`${this.dataServicesService.getRandomInt1(10, 30)}`, [Validators.required, Validators.pattern('^\\d+\\.?\\d*$')]],
      }),
      evaluate: this.fb.group({
        number: [`${this.dataServicesService.getRandomInt1(200, 500)}`, [Validators.required, Validators.pattern('^\\d+\\.?\\d*$')]],
      }),
      description: this.fb.array([
        this.fb.group({
          title: ['', [Validators.required]],
          content: ['', [Validators.required]],
        }),
        this.fb.group({
          title: ['', [Validators.required]],
          content: ['', [Validators.required]],
        }),
        this.fb.group({
          title: [''],
          content: [''],
        }),
        this.fb.group({
          title: [''],
          content: [''],
        }),
      ]),  // title: [''], content: ['']
      // img: this.fb.array([this.fb.group({
      //   name: '',
      //   link: '',
      // })]),  // name: [''], link: ['']
      img: this.fb.array([
        this.fb.group({
          name: ['', [Validators.required]],
          link: ['', [Validators.required]],
        }),
        this.fb.group({
          name: ['tên ảnh', [Validators.required]],
          link: ['link ảnh', [Validators.required]],
        }),
        this.fb.group({
          name: ['tên ảnh', [Validators.required]],
          link: ['link ảnh', [Validators.required]],
        }),
        this.fb.group({
          name: ['tên ảnh', [Validators.required]],
          link: ['link ảnh', [Validators.required]],
        }),
      ]),
    });
  }
  // tslint:disable-next-line:typedef
  get img1(){
    const imgArr = this.formContentXopPeFoamEva.controls.img as FormArray;
    return imgArr;
  }
  // tslint:disable-next-line:typedef
  get description1(){
    const descriptionArr = this.formContentXopPeFoamEva.controls.description as FormArray;
    return descriptionArr;
  }
  // tslint:disable-next-line:typedef
  get sellNumber(){
    const sellNumber = (this.formContentXopPeFoamEva.controls.sellNumber as FormGroup).controls.name as FormGroup;
    return sellNumber;
  }
  // tslint:disable-next-line:typedef
  get starNumber(){
    const starNumber = (this.formContentXopPeFoamEva.controls.star as FormGroup).controls.number as FormGroup;
    return starNumber;
  }
  // tslint:disable-next-line:typedef
  get discountNumber(){
    const discountNumber = (this.formContentXopPeFoamEva.controls.discount as FormGroup).controls.number as FormGroup;
    return discountNumber;
  }
  // tslint:disable-next-line:typedef
  get evaluateNumber(){
    const evaluateNumber = (this.formContentXopPeFoamEva.controls.evaluate as FormGroup).controls.number as FormGroup;
    return evaluateNumber;
  }
  public isEdit = false;
  public formDataXopPeFoamEva: any ;
  public formContentXopPeFoamEva: FormGroup;
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '3',
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
  };



  ngOnInit(): void {
    if (this.isEdit) {
      // su dung patchValue cua FormReactive de sua du lieu cua form (trong TH nay ta thay the luon bang mot data moi)
      this.formContentXopPeFoamEva.patchValue(this.formDataXopPeFoamEva);
    }
  }

  public onSubmit(): void {
    this.firebaseService.createFunctionalityList(this.formContentXopPeFoamEva.value, '/xoppefoameva');
    console.log(this.formContentXopPeFoamEva.value);
    this.matDialogRef.close();
  }

  public saveRowData(): any {
    this.matDialogRef.close({isEdit: true, data: this.formContentXopPeFoamEva.value});
  }

  // custom arr form
  public addArrItem(key: string): any {
    if (key === 'imgItem') {
      const imgItem = this.formContentXopPeFoamEva.controls.img as FormArray;
      imgItem.push(this.fb.group({
        name: ['', [Validators.required]],
        link: ['', [Validators.required]],
      }));
    }
    if (key === 'descriptionItem') {
      const descriptionItem = this.formContentXopPeFoamEva.controls.description as FormArray;
      descriptionItem.push(this.fb.group({
        title: ['', [Validators.required]],
        content: ['', [Validators.required]],
      }));
    }
  }

  public deleteItem(index: any, key: string): any {
    if (key === 'imgItem') {
      const imgItem = this.formContentXopPeFoamEva.controls.img as FormArray;
      imgItem.removeAt(index);
      console.log('xoa');
    }
    if (key === 'descriptionItem') {
      const descriptionItem = this.formContentXopPeFoamEva.controls.description as FormArray;
      descriptionItem.removeAt(index);
      console.log('xoa');
    }
  }

  public insertItemUp(index: number, key: string): any {
    if (key === 'imgItem') {
      const temp = this.formContentXopPeFoamEva.controls.img as FormArray;
      temp.insert(index, this.fb.group({
        name: ['', [Validators.required]],
        link: ['', [Validators.required]],
      }));
    }
    if (key === 'descriptionItem') {
      const descriptionItem = this.formContentXopPeFoamEva.controls.description as FormArray;
      descriptionItem.insert(index, this.fb.group({
        title: ['', [Validators.required]],
        content: ['', [Validators.required]],
      }));
    }
  }

  public submit(): any {
    console.log(this.formContentXopPeFoamEva.value);
    return this.formContentXopPeFoamEva.value;
  }

  public checkLengthArr(key: string): any {
    if (key === 'imgItem') {
      let isCheck = false;
      const imgItem = this.formContentXopPeFoamEva.controls.img as FormArray;
      if (imgItem.length > 3) {
        isCheck = true;
      }
      return isCheck;
    }
    if (key === 'descriptionItem') {
      let isCheck = false;
      const descriptionItem = this.formContentXopPeFoamEva.controls.description as FormArray;
      if (descriptionItem.length > 3) {
        isCheck = true;
      }
      return isCheck;
    }
  }

}
