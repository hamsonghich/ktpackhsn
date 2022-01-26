import {Component, OnInit} from '@angular/core';
import {FirebaseServiceService} from '../../../services/firebase-service.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {FormServicesService} from '../service/form-services.service';

@Component({
  selector: 'app-form-meta-thungnhua',
  templateUrl: './form-meta-thungnhua.component.html',
  styleUrls: ['./form-meta-thungnhua.component.scss']
})
export class FormMetaThungnhuaComponent implements OnInit {
  public formMetaThungnhua: FormGroup | any;
  public formDataMetaTagThungnhua: any;
  constructor(public firebaseService: FirebaseServiceService, public matDialogRef: MatDialogRef<FormMetaThungnhuaComponent>,
              public fb: FormBuilder, public dialog: MatDialog, public formServices: FormServicesService) {
    this.formMetaThungnhua = this.fb.group({
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
    });
  }

  ngOnInit(): void {
    this.formMetaThungnhua.patchValue(this.formDataMetaTagThungnhua);
  }
  // tslint:disable-next-line:typedef
  get getMetaTagName(){
    const metaTagName = (this.formMetaThungnhua.controls.metaTagName as FormArray);
    return metaTagName;
  }
  // tslint:disable-next-line:typedef
  get getMetaTagProperty(){
    const metaTagProperty = (this.formMetaThungnhua.controls.metaTagProperty as FormArray);
    return metaTagProperty;
  }
  public onSubmit(): any{
    this.firebaseService.createFunctionalityObject(this.formMetaThungnhua.value, '/metaTag/metaTagThungnhua');
    this.matDialogRef.close();
  }
}
