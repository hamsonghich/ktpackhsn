import {Component, OnInit} from '@angular/core';
import {FirebaseServiceService} from '../../../services/firebase-service.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-meta-vachnhua',
  templateUrl: './form-meta-vachnhua.component.html',
  styleUrls: ['./form-meta-vachnhua.component.scss']
})
export class FormMetaVachnhuaComponent implements OnInit {
  public formMetaVachnhua: FormGroup | any;
  public formDataMetaTagVachnhua: any;
  constructor(public firebaseService: FirebaseServiceService, public matDialogRef: MatDialogRef<FormMetaVachnhuaComponent>,
              public fb: FormBuilder, public dialog: MatDialog) {
    this.formMetaVachnhua = this.fb.group({
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
    this.formMetaVachnhua.patchValue(this.formDataMetaTagVachnhua);
  }
  // tslint:disable-next-line:typedef
  get getMetaTagName(){
    const metaTagName = (this.formMetaVachnhua.controls.metaTagName as FormArray);
    return metaTagName;
  }
  // tslint:disable-next-line:typedef
  get getMetaTagProperty(){
    const metaTagProperty = (this.formMetaVachnhua.controls.metaTagProperty as FormArray);
    return metaTagProperty;
  }
  public onSubmit(): any{
    this.firebaseService.createFunctionalityObject(this.formMetaVachnhua.value, '/metaTag/metaTagVachnhua');
    this.matDialogRef.close();
  }
}
