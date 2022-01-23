import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FirebaseServiceService} from '../../services/firebase-service.service';
import {MatDialogRef} from '@angular/material/dialog';
import {DataServicesService} from '../../services/data-services.service';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-form-vachnhuadanpla',
  templateUrl: './form-vachnhuadanpla.component.html',
  styleUrls: ['./form-vachnhuadanpla.component.scss']
})
export class FormVachnhuadanplaComponent implements OnInit {
  public typeVachnhuadanpla: any[] = [];
  // tslint:disable-next-line:max-line-length
  constructor(public fb: FormBuilder, public firebaseService: FirebaseServiceService, public matDialogRef: MatDialogRef<FormVachnhuadanplaComponent>,
              public dataServicesService: DataServicesService) {
    this.firebaseService.readFunctionalityObject('/tieudeMain').subscribe((res: any) => {
      this.typeVachnhuadanpla = res.vachnhuadanpla;
    });
    this.formContentVachnhuadanpla = this.fb.group({
      addCart: ['false'],
      typeName: this.fb.group({
        name: ['', [Validators.required]],
        id: ['vach'],
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
    const imgArr = this.formContentVachnhuadanpla.controls.img as FormArray;
    return imgArr;
  }
  // tslint:disable-next-line:typedef
  get description1(){
    const descriptionArr = this.formContentVachnhuadanpla.controls.description as FormArray;
    return descriptionArr;
  }
  // tslint:disable-next-line:typedef
  get sellNumber(){
    const sellNumber = (this.formContentVachnhuadanpla.controls.sellNumber as FormGroup).controls.name as FormGroup;
    return sellNumber;
  }
  // tslint:disable-next-line:typedef
  get starNumber(){
    const starNumber = (this.formContentVachnhuadanpla.controls.star as FormGroup).controls.number as FormGroup;
    return starNumber;
  }
  // tslint:disable-next-line:typedef
  get discountNumber(){
    const discountNumber = (this.formContentVachnhuadanpla.controls.discount as FormGroup).controls.number as FormGroup;
    return discountNumber;
  }
  // tslint:disable-next-line:typedef
  get evaluateNumber(){
    const evaluateNumber = (this.formContentVachnhuadanpla.controls.evaluate as FormGroup).controls.number as FormGroup;
    return evaluateNumber;
  }
  public isEdit = false;
  public formDataVachnhuadanpla: any ;
  public formContentVachnhuadanpla: FormGroup;
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
      this.formContentVachnhuadanpla.patchValue(this.formDataVachnhuadanpla);
    }
  }

  public onSubmit(): void {
    this.firebaseService.createFunctionalityList(this.formContentVachnhuadanpla.value, '/vachnhuadanpla');
    console.log(this.formContentVachnhuadanpla.value);
    this.matDialogRef.close();
  }

  public saveRowData(): any {
    this.matDialogRef.close({isEdit: true, data: this.formContentVachnhuadanpla.value});
  }

  // custom arr form
  public addArrItem(key: string): any {
    if (key === 'imgItem') {
      const imgItem = this.formContentVachnhuadanpla.controls.img as FormArray;
      imgItem.push(this.fb.group({
        name: ['', [Validators.required]],
        link: ['', [Validators.required]],
      }));
    }
    if (key === 'descriptionItem') {
      const descriptionItem = this.formContentVachnhuadanpla.controls.description as FormArray;
      descriptionItem.push(this.fb.group({
        title: ['', [Validators.required]],
        content: ['', [Validators.required]],
      }));
    }
  }

  public deleteItem(index: any, key: string): any {
    if (key === 'imgItem') {
      const imgItem = this.formContentVachnhuadanpla.controls.img as FormArray;
      imgItem.removeAt(index);
      console.log('xoa');
    }
    if (key === 'descriptionItem') {
      const descriptionItem = this.formContentVachnhuadanpla.controls.description as FormArray;
      descriptionItem.removeAt(index);
      console.log('xoa');
    }
  }

  public insertItemUp(index: number, key: string): any {
    if (key === 'imgItem') {
      const temp = this.formContentVachnhuadanpla.controls.img as FormArray;
      temp.insert(index, this.fb.group({
        name: ['', [Validators.required]],
        link: ['', [Validators.required]],
      }));
    }
    if (key === 'descriptionItem') {
      const descriptionItem = this.formContentVachnhuadanpla.controls.description as FormArray;
      descriptionItem.insert(index, this.fb.group({
        title: ['', [Validators.required]],
        content: ['', [Validators.required]],
      }));
    }
  }

  public submit(): any {
    console.log(this.formContentVachnhuadanpla.value);
    return this.formContentVachnhuadanpla.value;
  }

  public checkLengthArr(key: string): any {
    if (key === 'imgItem') {
      let isCheck = false;
      const imgItem = this.formContentVachnhuadanpla.controls.img as FormArray;
      if (imgItem.length > 3) {
        isCheck = true;
      }
      return isCheck;
    }
    if (key === 'descriptionItem') {
      let isCheck = false;
      const descriptionItem = this.formContentVachnhuadanpla.controls.description as FormArray;
      if (descriptionItem.length > 3) {
        isCheck = true;
      }
      return isCheck;
    }
  }

}
