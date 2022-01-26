import {Component, OnInit} from '@angular/core';
import {FirebaseServiceService} from '../../../services/firebase-service.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-form-meta-xopbongkhi',
  templateUrl: './form-meta-xopbongkhi.component.html',
  styleUrls: ['./form-meta-xopbongkhi.component.scss']
})

export class FormMetaXopbongkhiComponent implements OnInit {
  public formMetaXopbongkhi: FormGroup | any;
  public formDataMetaTagXopbongkhi: any;
  constructor(public firebaseService: FirebaseServiceService, public matDialogRef: MatDialogRef<FormMetaXopbongkhiComponent>,
              public fb: FormBuilder, public dialog: MatDialog) {
    this.formMetaXopbongkhi = this.fb.group({
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
    this.formMetaXopbongkhi.patchValue(this.formDataMetaTagXopbongkhi);
  }
  // tslint:disable-next-line:typedef
  get getMetaTagName(){
    const metaTagName = (this.formMetaXopbongkhi.controls.metaTagName as FormArray);
    return metaTagName;
  }
  // tslint:disable-next-line:typedef
  get getMetaTagProperty(){
    const metaTagProperty = (this.formMetaXopbongkhi.controls.metaTagProperty as FormArray);
    return metaTagProperty;
  }
  public onSubmit(): any{
    this.firebaseService.createFunctionalityObject(this.formMetaXopbongkhi.value, '/metaTag/metaTagXopbongkhi');
    this.matDialogRef.close();
  }
}
