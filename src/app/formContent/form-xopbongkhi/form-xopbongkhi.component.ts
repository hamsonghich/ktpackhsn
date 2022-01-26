import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FirebaseServiceService} from '../../services/firebase-service.service';
import {MatDialogRef} from '@angular/material/dialog';
import {DataServicesService} from '../../services/data-services.service';
import {AngularEditorConfig} from '@kolkov/angular-editor';

@Component({
  selector: 'app-form-xopbongkhi',
  templateUrl: './form-xopbongkhi.component.html',
  styleUrls: ['./form-xopbongkhi.component.scss']
})
export class FormXopbongkhiComponent implements OnInit {
  public typeXopbongkhi: any[] = [];
  // tslint:disable-next-line:max-line-length
  constructor(public fb: FormBuilder, public firebaseService: FirebaseServiceService, public matDialogRef: MatDialogRef<FormXopbongkhiComponent>,
              public dataServicesService: DataServicesService) {
    this.firebaseService.readFunctionalityObject('/tieudeMain').subscribe((res: any) => {
      this.typeXopbongkhi = res.xopbongkhi;
    });
    this.formContentXopbongkhi = this.fb.group({
      addCart: [false],
      checkBox: [false],
      typeName: this.fb.group({
        name: ['', [Validators.required]],
        id: ['xopbongkhi'],
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
      metaTag: this.fb.group({
        metaTagName: this.fb.array([
          this.fb.group({
            name: [''],
            content: [''],
          }),
          this.fb.group({
            name: [''],
            content: [''],
          }),
          this.fb.group({
            name: [''],
            content: [''],
          }),
          this.fb.group({
            name: [''],
            content: [''],
          }),
          this.fb.group({
            name: [''],
            content: [''],
          }),
        ]),
        metaTagProperty: this.fb.array([
          this.fb.group({
            property: ['og:type'],
            content: [''],
          }),
          this.fb.group({
            property: ['og:title'],
            content: [''],
          }),
          this.fb.group({
            property: ['og:description'],
            content: [''],
          }),
          this.fb.group({
            property: ['og:image'],
            content: [''],
          }),
          this.fb.group({
            property: ['og:url'],
            content: [''],
          }),
          this.fb.group({
            property: ['og:site_name'],
            content: [''],
          }),
          this.fb.group({
            property: ['og:locale'],
            content: ['vi_VN'],
          }),
        ]),
      }),
    });
  }
  // tslint:disable-next-line:typedef
  get metaTag1(){
    const metaTagArr = this.formContentXopbongkhi.controls.metaTag as FormArray;
    return metaTagArr;
  }
  // tslint:disable-next-line:typedef
  get metaTagaName1(){
    const metaTagName = (this.formContentXopbongkhi.controls.metaTag as FormGroup).controls.metaTagName as FormArray;
    return metaTagName;
  }
  // tslint:disable-next-line:typedef
  get metaTagProperty1(){
    const metaTagProperty = (this.formContentXopbongkhi.controls.metaTag as FormGroup).controls.metaTagProperty as FormArray;
    return metaTagProperty;
  }
  // tslint:disable-next-line:typedef
  get img1(){
    const imgArr = this.formContentXopbongkhi.controls.img as FormArray;
    return imgArr;
  }
  // tslint:disable-next-line:typedef
  get description1(){
    const descriptionArr = this.formContentXopbongkhi.controls.description as FormArray;
    return descriptionArr;
  }
  // tslint:disable-next-line:typedef
  get sellNumber(){
    const sellNumber = (this.formContentXopbongkhi.controls.sellNumber as FormGroup).controls.name as FormGroup;
    return sellNumber;
  }
  // tslint:disable-next-line:typedef
  get starNumber(){
    const starNumber = (this.formContentXopbongkhi.controls.star as FormGroup).controls.number as FormGroup;
    return starNumber;
  }
  // tslint:disable-next-line:typedef
  get discountNumber(){
    const discountNumber = (this.formContentXopbongkhi.controls.discount as FormGroup).controls.number as FormGroup;
    return discountNumber;
  }
  // tslint:disable-next-line:typedef
  get evaluateNumber(){
    const evaluateNumber = (this.formContentXopbongkhi.controls.evaluate as FormGroup).controls.number as FormGroup;
    return evaluateNumber;
  }
  public isEdit = false;
  public formDataXopbongkhi: any ;
  public formContentXopbongkhi: FormGroup;
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
      this.formContentXopbongkhi.patchValue(this.formDataXopbongkhi);
    }
  }

  public onSubmit(): void {
    this.firebaseService.createFunctionalityList(this.formContentXopbongkhi.value, '/xopbongkhi');
    console.log(this.formContentXopbongkhi.value);
    this.matDialogRef.close();
  }

  public saveRowData(): any {
    this.matDialogRef.close({isEdit: true, data: this.formContentXopbongkhi.value});
  }

  // custom arr form
  public addArrItem(key: string): any {
    if (key === 'imgItem') {
      const imgItem = this.formContentXopbongkhi.controls.img as FormArray;
      imgItem.push(this.fb.group({
        name: ['', [Validators.required]],
        link: ['', [Validators.required]],
      }));
    }
    if (key === 'descriptionItem') {
      const descriptionItem = this.formContentXopbongkhi.controls.description as FormArray;
      descriptionItem.push(this.fb.group({
        title: ['', [Validators.required]],
        content: ['', [Validators.required]],
      }));
    }
  }

  public deleteItem(index: any, key: string): any {
    if (key === 'imgItem') {
      const imgItem = this.formContentXopbongkhi.controls.img as FormArray;
      imgItem.removeAt(index);
      console.log('xoa');
    }
    if (key === 'descriptionItem') {
      const descriptionItem = this.formContentXopbongkhi.controls.description as FormArray;
      descriptionItem.removeAt(index);
      console.log('xoa');
    }
  }

  public insertItemUp(index: number, key: string): any {
    if (key === 'imgItem') {
      const temp = this.formContentXopbongkhi.controls.img as FormArray;
      temp.insert(index, this.fb.group({
        name: ['', [Validators.required]],
        link: ['', [Validators.required]],
      }));
    }
    if (key === 'descriptionItem') {
      const descriptionItem = this.formContentXopbongkhi.controls.description as FormArray;
      descriptionItem.insert(index, this.fb.group({
        title: ['', [Validators.required]],
        content: ['', [Validators.required]],
      }));
    }
  }

  public submit(): any {
    console.log(this.formContentXopbongkhi.value);
    return this.formContentXopbongkhi.value;
  }

  public checkLengthArr(key: string): any {
    if (key === 'imgItem') {
      let isCheck = false;
      const imgItem = this.formContentXopbongkhi.controls.img as FormArray;
      if (imgItem.length > 3) {
        isCheck = true;
      }
      return isCheck;
    }
    if (key === 'descriptionItem') {
      let isCheck = false;
      const descriptionItem = this.formContentXopbongkhi.controls.description as FormArray;
      if (descriptionItem.length > 3) {
        isCheck = true;
      }
      return isCheck;
    }
  }

}
