import { Injectable } from '@angular/core';
import {Form, FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataServicesService} from '../../services/data-services.service';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  constructor(public fb: FormBuilder, public dataServicesService: DataServicesService) {
  }
  // custom arr form
  public addArrItem(key: string, formDemo: { controls: { img: FormArray; description: FormArray; }; }): any {
    if (key === 'imgItem') {
      const imgItem = formDemo.controls.img as FormArray;
      imgItem.push(this.fb.group({
        name: ['', [Validators.required]],
        link: ['', [Validators.required]],
      }));
    }
    if (key === 'descriptionItem') {
      const descriptionItem = formDemo.controls.description as FormArray;
      descriptionItem.push(this.fb.group({
        title: ['', [Validators.required]],
        content: ['', [Validators.required]],
      }));
    }
  }

  public deleteItem(index: any, key: string, formDemo: { controls: { img: FormArray; description: FormArray; }; }): any {
    if (key === 'imgItem') {
      const imgItem = formDemo.controls.img as FormArray;
      imgItem.removeAt(index);
      console.log('xoa');
    }
    if (key === 'descriptionItem') {
      const descriptionItem = formDemo.controls.description as FormArray;
      descriptionItem.removeAt(index);
      console.log('xoa');
    }
  }

  public insertItemUp(index: number, key: string, formDemo: { controls: { img: FormArray; description: FormArray; }; }): any {
    if (key === 'imgItem') {
      const temp = formDemo.controls.img as FormArray;
      temp.insert(index, this.fb.group({
        name: ['', [Validators.required]],
        link: ['', [Validators.required]],
      }));
    }
    if (key === 'descriptionItem') {
      const descriptionItem = formDemo.controls.description as FormArray;
      descriptionItem.insert(index, this.fb.group({
        title: ['', [Validators.required]],
        content: ['', [Validators.required]],
      }));
    }
  }

  public submit(formDemo: { value: any; }): any {
    console.log(formDemo.value);
    return formDemo.value;
  }

  public checkLengthArr(key: string, formDemo: { controls: { img: FormArray; description: FormArray; }; }): any {
    if (key === 'imgItem') {
      let isCheck = false;
      const imgItem = formDemo.controls.img as FormArray;
      if (imgItem.length > 3) {
        isCheck = true;
      }
      return isCheck;
    }
    if (key === 'descriptionItem') {
      let isCheck = false;
      const descriptionItem = formDemo.controls.description as FormArray;
      if (descriptionItem.length > 3) {
        isCheck = true;
      }
      return isCheck;
    }
  }
}
