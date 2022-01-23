import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FirebaseServiceService} from '../../services/firebase-service.service';
import {MatDialogRef} from '@angular/material/dialog';
import {DataServicesService} from '../../services/data-services.service';
import {AngularEditorConfig} from '@kolkov/angular-editor';

@Component({
  selector: 'app-form-header',
  templateUrl: './form-header.component.html',
  styleUrls: ['./form-header.component.scss']
})
export class FormHeaderComponent implements OnInit {
  public formContentHeader: any;
  public isEdit = false;
  public formDataTieude: any;
  public showContentArr = [
    {value: true},
    {value: false},
    {value: false},
    {value: false},
  ];
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

  constructor(public fb: FormBuilder, public firebaseService: FirebaseServiceService, public matDialogRef: MatDialogRef<FormHeaderComponent>,
              public dataServicesService: DataServicesService) {

    this.formContentHeader = this.fb.group({
      thungnhuadanpla: this.fb.array([
        this.fb.group({
          name: '', link: ''
        }),
        this.fb.group({
          name: '', link: ''
        }),
        this.fb.group({
          name: '', link: ''
        }),
        this.fb.group({
          name: '', link: ''
        }),
        this.fb.group({
          name: '', link: ''
        }),
        this.fb.group({
          name: '', link: ''
        }),
        this.fb.group({
          name: '', link: ''
        }),
        this.fb.group({
          name: '', link: ''
        }),
        this.fb.group({
          name: '', link: ''
        }),
        this.fb.group({
          name: '', link: ''
        }),
      ]),

      vachnhuadanpla: this.fb.array([
        this.fb.group({
          name: '', link: ''
        }),
        this.fb.group({
          name: '', link: ''
        }),
        this.fb.group({
          name: '', link: ''
        }),
        this.fb.group({
          name: '', link: ''
        }),
        this.fb.group({
          name: '', link: ''
        }),
        this.fb.group({
          name: '', link: ''
        }),
        this.fb.group({
          name: '', link: ''
        }),
        this.fb.group({
          name: '', link: ''
        }),
        this.fb.group({
          name: '', link: ''
        }),
        this.fb.group({
          name: '', link: ''
        }),
      ]),

      xoppefoameva: this.fb.array([
        this.fb.group({
          name: '', link: ''
        }),
        this.fb.group({
          name: '', link: ''
        }),
        this.fb.group({
          name: '', link: ''
        }),
        this.fb.group({
          name: '', link: ''
        }),
        this.fb.group({
          name: '', link: ''
        }),
        this.fb.group({
          name: '', link: ''
        }),
        this.fb.group({
          name: '', link: ''
        }),
        this.fb.group({
          name: '', link: ''
        }),
        this.fb.group({
          name: '', link: ''
        }),
        this.fb.group({
          name: '', link: ''
        }),
      ]),

      xopbongkhi: this.fb.array([
        this.fb.group({
          name: '', link: ''
        }),
        this.fb.group({
          name: '', link: ''
        }),
        this.fb.group({
          name: '', link: ''
        }),
        this.fb.group({
          name: '', link: ''
        }),
        this.fb.group({
          name: '', link: ''
        }),
        this.fb.group({
          name: '', link: ''
        }),
        this.fb.group({
          name: '', link: ''
        }),
        this.fb.group({
          name: '', link: ''
        }),
        this.fb.group({
          name: '', link: ''
        }),
        this.fb.group({
          name: '', link: ''
        }),
      ])
    });
  }

  ngOnInit(): void {
    if (this.isEdit) {
      // su dung patchValue cua FormReactive de sua du lieu cua form (trong TH nay ta thay the luon bang mot data moi)
      this.formContentHeader.patchValue(this.formDataTieude);
    }
  }
  public onSubmit(): void {
    this.firebaseService.createFunctionalityObject(this.formContentHeader.value, '/tieudeMain');
    console.log(this.formContentHeader.value);
    this.matDialogRef.close();
  }

  public saveRowData(): any {
    this.matDialogRef.close({isEdit: true, data: this.formContentHeader.value});
  }
  public showContent(id: number): any{
    this.showContentArr.forEach(item => {
      item.value = false;
    });
    this.showContentArr[id].value = true;
  }
  // tslint:disable-next-line:typedef
  get typeThungnhuadanpla() {
    return this.formContentHeader.controls.thungnhuadanpla as FormArray;
  }

  // tslint:disable-next-line:typedef
  get typeVachnhuadanpla() {
    return this.formContentHeader.controls.vachnhuadanpla as FormArray;
  }
  // tslint:disable-next-line:typedef
  get typeXoppefoameva() {
    return this.formContentHeader.controls.xoppefoameva as FormArray;
  }
  // tslint:disable-next-line:typedef
  get typeXopbongkhi() {
    return this.formContentHeader.controls.xopbongkhi as FormArray;
  }
  public addArrItem(key: string): any {
    if (key === 'thungnhuadanpla') {
      const thungnhuadanpla = this.formContentHeader.controls.thungnhuadanpla as FormArray;
      thungnhuadanpla.push(this.fb.group({
        name: ['', [Validators.required]],
        link: ['', [Validators.required]],
      }));
    }
    if (key === 'vachnhuadanpla') {
      const vachnhuadanpla = this.formContentHeader.controls.vachnhuadanpla as FormArray;
      vachnhuadanpla.push(this.fb.group({
        name: ['', [Validators.required]],
        link: ['', [Validators.required]],
      }));
    }
    if (key === 'xoppefoameva') {
      const xoppefoameva = this.formContentHeader.controls.xoppefoameva as FormArray;
      xoppefoameva.push(this.fb.group({
        name: ['', [Validators.required]],
        link: ['', [Validators.required]],
      }));
    }
    if (key === 'xopbongkhi') {
      const xopbongkhi = this.formContentHeader.controls.xopbongkhi as FormArray;
      xopbongkhi.push(this.fb.group({
        name: ['', [Validators.required]],
        link: ['', [Validators.required]],
      }));
    }
  }

  public deleteItem(index: any, key: string): any {
    if (key === 'thungnhuadanpla') {
      const thungnhuadanpla = this.formContentHeader.controls.thungnhuadanpla as FormArray;
      thungnhuadanpla.removeAt(index);
      console.log('xoa');
    }
    if (key === 'vachnhuadanpla') {
      const vachnhuadanpla = this.formContentHeader.controls.vachnhuadanpla as FormArray;
      vachnhuadanpla.removeAt(index);
      console.log('xoa');
    }
    if (key === 'xoppefoameva') {
      const xoppefoameva = this.formContentHeader.controls.xoppefoameva as FormArray;
      xoppefoameva.removeAt(index);
      console.log('xoa');
    }
    if (key === 'xopbongkhi') {
      const xopbongkhi = this.formContentHeader.controls.xopbongkhi as FormArray;
      xopbongkhi.removeAt(index);
      console.log('xoa');
    }
  }

  public insertItemUp(index: number, key: string): any {
    if (key === 'thungnhuadanpla') {
      const thungnhuadanpla = this.formContentHeader.controls.thungnhuadanpla as FormArray;
      thungnhuadanpla.insert(index, this.fb.group({
        name: ['', [Validators.required]],
        link: ['', [Validators.required]],
      }));
    }
    if (key === 'vachnhuadanpla') {
      const vachnhuadanpla = this.formContentHeader.controls.vachnhuadanpla as FormArray;
      vachnhuadanpla.insert(index, this.fb.group({
        name: ['', [Validators.required]],
        link: ['', [Validators.required]],
      }));
    }
    if (key === 'xoppefoameva') {
      const xoppefoameva = this.formContentHeader.controls.xoppefoameva as FormArray;
      xoppefoameva.insert(index, this.fb.group({
        name: ['', [Validators.required]],
        link: ['', [Validators.required]],
      }));
    }
    if (key === 'xopbongkhi') {
      const xopbongkhi = this.formContentHeader.controls.xopbongkhi as FormArray;
      xopbongkhi.insert(index, this.fb.group({
        name: ['', [Validators.required]],
        link: ['', [Validators.required]],
      }));
    }
  }

  public submit(): any {
    console.log(this.formContentHeader.value);
    return this.formContentHeader.value;
  }

  public checkLengthArr(key: string): any {
    if (key === 'thungnhuadanpla') {
      let isCheck = false;
      const thungnhuadanpla = this.formContentHeader.controls.thungnhuadanpla as FormArray;
      if (thungnhuadanpla.length > 10) {
        isCheck = true;
      }
      return isCheck;
    }
    if (key === 'vachnhuadanpla') {
      let isCheck = false;
      const vachnhuadanpla = this.formContentHeader.controls.vachnhuadanpla as FormArray;
      if (vachnhuadanpla.length > 10) {
        isCheck = true;
      }
      return isCheck;
    }
  }

}
