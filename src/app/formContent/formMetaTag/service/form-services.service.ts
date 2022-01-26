import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormServicesService {

  constructor() { }
  public hello(): any{
    alert('jaja');
  }
}
