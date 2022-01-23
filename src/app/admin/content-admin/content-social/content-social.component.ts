import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FormThungnhuadanplaComponent} from '../../../formContent/form-thungnhuadanpla/form-thungnhuadanpla.component';
import {FormSocialComponent} from '../../../formContent/form-social/form-social.component';
import {FirebaseServiceService} from '../../../services/firebase-service.service';

@Component({
  selector: 'app-content-social',
  templateUrl: './content-social.component.html',
  styleUrls: ['./content-social.component.scss']
})
export class ContentSocialComponent implements OnInit {
  public dataFormSocial: any;
  public linkMap: any;
  constructor(public dialog: MatDialog, public firebaseService: FirebaseServiceService) {
    this.firebaseService.readFunctionalityObject('/lienhe').subscribe((res: { mapLink: any; }) => {
      this.linkMap = res.mapLink;
    });
    this.getAllSocial();
  }

  ngOnInit(): void {
  }
  public getAllSocial(): any{
    this.firebaseService.readFunctionalityObject('/social').subscribe((res: any) => {
      this.dataFormSocial = res;
    });
  }
  public openDialogSocial(rowData: any): any{
    const dialogRef = this.dialog.open(FormSocialComponent, {
      height:  '300px', width: '500px'
    });
    // hien thi diglog cho khi nhan vao edit (nhung chua co data)
    dialogRef.componentInstance.isEdit = true;
    // tslint:disable-next-line:max-line-length
    dialogRef.componentInstance.formDataSocial = rowData; // gan du lieu  formData cua createCustomer  =  voi rowData (rowData la data cua tung hang)
    // sau khi dong dialog thi chay ham updatedata vs du lieu da co (nhung phai co ham close() cua diaglog thi  moi co tac dung)
    dialogRef.afterClosed().subscribe(res => {
      if (res && res.isEdit && res.data){
        this.firebaseService.updateFunctionality(res.data, '/social');
        console.log(res.data);
      }
    });
  }

}
