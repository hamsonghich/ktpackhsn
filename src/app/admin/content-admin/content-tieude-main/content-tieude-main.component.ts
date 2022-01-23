import { Component, OnInit } from '@angular/core';
import {FirebaseServiceService} from '../../../services/firebase-service.service';
import {FormGioithieuComponent} from '../../../formContent/form-gioithieu/form-gioithieu.component';
import {MatDialog} from '@angular/material/dialog';
import {FormTintucComponent} from '../../../formContent/form-tintuc/form-tintuc.component';
import {FormHeaderComponent} from '../../../formContent/form-header/form-header.component';
import {FormThungnhuadanplaComponent} from '../../../formContent/form-thungnhuadanpla/form-thungnhuadanpla.component';
interface ArrContentHeader{
  thungnhuadanpla: {link: '', name: ''}[];
  vachnhuadanpla: {link: '', name: ''}[];
  xoppefoameva: {link: '', name: ''}[];
  xopbongkhi: {link: '', name: ''}[];
}
@Component({
  selector: 'app-content-tieude-main',
  templateUrl: './content-tieude-main.component.html',
  styleUrls: ['./content-tieude-main.component.scss']
})

export class ContentTieudeMainComponent implements OnInit {
  public dataContentHeader: ArrContentHeader | undefined;
  public dataContentHeaderCustom: any;
  constructor(public firebaseService: FirebaseServiceService, public matDialog: MatDialog, public dialog: MatDialog) {
    this.getAllHeader();
  }

  ngOnInit(): void {

  }
  public openDialogContentTieude(): any{
    this.matDialog.open(FormHeaderComponent, {
      height: '600px', width: '800px'
    });
  }
  public getAllHeader(): any{
    this.firebaseService.readFunctionalityObject('/tieudeMain').subscribe((res: any) => {
      // console.log(res);
      this.dataContentHeader = res;
      // console.log('aaaa', res);
    });
    // console.log(this.dataTableCustomer);
  }
  public updateAllHeader(dataHeader: any): any{
    const dialogRef = this.matDialog.open(FormHeaderComponent, {
      height: '600px', width: '800px'
    });
    dialogRef.componentInstance.isEdit = true;
    dialogRef.componentInstance.formDataTieude = dataHeader;
    dialogRef.afterClosed().subscribe(res => {
      if (res && res.isEdit && res.data){
        this.firebaseService.updateFunctionality(res.data, '/tieudeMain');
        // console.log(res.data);
      }
    });
  }
  // public collapseObj(obj: ArrContentHeader): any{
  //   // tslint:disable-next-line:prefer-for-of
  //   for (let i = 0 ; i < obj.thungnhuadanpla.length; i++){
  //     if (obj.thungnhuadanpla[i].name.length === 0){
  //       obj.thungnhuadanpla.splice(i , 1);
  //     }
  //   }
  //   // tslint:disable-next-line:prefer-for-of
  //   for (let i = 0 ; i < obj.vachnhuadanpla.length; i++){
  //     if (obj.vachnhuadanpla[i].name.length === 0){
  //       obj.vachnhuadanpla.splice(i , 1);
  //     }
  //   }
  //   // tslint:disable-next-line:prefer-for-of
  //   for (let i = 0 ; i < obj.xoppefoameva.length; i++){
  //     if (obj.xoppefoameva[i].name.length === 0){
  //       obj.xoppefoameva.splice(i , 1);
  //     }
  //   }
  //   // tslint:disable-next-line:prefer-for-of
  //   for (let i = 0 ; i < obj.xopbongkhi.length; i++){
  //     if (obj.xopbongkhi[i].name.length === 0){
  //       obj.xopbongkhi.splice(i , 1);
  //     }
  //   }
  //   return obj;
  // }

}
