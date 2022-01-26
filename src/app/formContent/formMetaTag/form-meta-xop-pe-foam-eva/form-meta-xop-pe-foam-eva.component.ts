import {Component, OnInit} from '@angular/core';
import {FirebaseServiceService} from '../../../services/firebase-service.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-form-meta-xop-pe-foam-eva',
  templateUrl: './form-meta-xop-pe-foam-eva.component.html',
  styleUrls: ['./form-meta-xop-pe-foam-eva.component.scss']
})
export class FormMetaXopPeFoamEvaComponent implements OnInit {
  public formMetaXoppefoameva: FormGroup | any;
  public formDataMetaTagXoppefoameva: any;
  constructor(public firebaseService: FirebaseServiceService, public matDialogRef: MatDialogRef<FormMetaXopPeFoamEvaComponent>,
              public fb: FormBuilder, public dialog: MatDialog) {
    this.formMetaXoppefoameva = this.fb.group({
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
    this.formMetaXoppefoameva.patchValue(this.formDataMetaTagXoppefoameva);
  }
  // tslint:disable-next-line:typedef
  get getMetaTagName(){
    const metaTagName = (this.formMetaXoppefoameva.controls.metaTagName as FormArray);
    return metaTagName;
  }
  // tslint:disable-next-line:typedef
  get getMetaTagProperty(){
    const metaTagProperty = (this.formMetaXoppefoameva.controls.metaTagProperty as FormArray);
    return metaTagProperty;
  }
  public onSubmit(): any{
    this.firebaseService.createFunctionalityObject(this.formMetaXoppefoameva.value, '/metaTag/metaTagXoppefoameva');
    this.matDialogRef.close();
  }
}
