import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FirebaseServiceService} from '../../../services/firebase-service.service';
import {AngularFireDatabase} from '@angular/fire/database';
import {DataServicesService} from '../../../services/data-services.service';
import {FormVachnhuadanplaComponent} from '../../../formContent/form-vachnhuadanpla/form-vachnhuadanpla.component';

@Component({
  selector: 'app-content-vachnhuadanpla',
  templateUrl: './content-vachnhuadanpla.component.html',
  styleUrls: ['./content-vachnhuadanpla.component.scss']
})
export class ContentVachnhuadanplaComponent implements OnInit {

  public isCheckNotication = true; public temp: any;
  public dataContentVachnhuadanpla: any[] = [];
  public dataContentVachnhuadanpla1: any[] = [];
  public dataTableCustomer: any[] = [];
  public dataSpe: any;

  public itemOfPageArr = [5, 10, 15, 20, 25, 30];
  public chooseItemOfPage = this.itemOfPageArr[0];  page = 1;
  public keySearch: any;
  public dataSearchKeyword: any[] = [];

  constructor(public dialog: MatDialog, public firebaseService: FirebaseServiceService, public angulardb: AngularFireDatabase,
              public dataServicesService: DataServicesService) { }

  ngOnInit(): void {
    this.getAllCustomer();
  }
  public createVachnhuadanplaBtn(): any{
    this.dialog.open(FormVachnhuadanplaComponent, {
      height: '600px', width: '700px'
    });
  }
  public getAllCustomer(): any{
    this.firebaseService.readFunctionalityList('/vachnhuadanpla').subscribe((res: any) => {
      // console.log(res);
      this.dataTableCustomer = res;
      this.dataSearchKeyword = JSON.parse(JSON.stringify(this.dataTableCustomer));
    });
    // console.log(this.dataTableCustomer);
  }

  public updateCustomer(rowData: any, link: string): any{ // rowData chinh la du lieu cua tung hang trong bang
    const dialogRef = this.dialog.open(FormVachnhuadanplaComponent, {
      height:  '600px', width: '700px'
    });
    // hien thi diglog cho khi nhan vao edit (nhung chua co data)
    dialogRef.componentInstance.isEdit = true;
    // tslint:disable-next-line:max-line-length
    dialogRef.componentInstance.formDataVachnhuadanpla = rowData; // gan du lieu  formData cua createCustomer  =  voi rowData (rowData la data cua tung hang)
    // sau khi dong dialog thi chay ham updatedata vs du lieu da co (nhung phai co ham close() cua diaglog thi  moi co tac dung)
    dialogRef.afterClosed().subscribe(res => {
      if (res && res.isEdit && res.data){
        this.firebaseService.updateFunctionalityList(res.data, link , rowData.idProduct);
      }
    });
    console.log(rowData);
  }
  public deleteDataCustomer(rowdata: any): any{
    // console.log('delete' + rowdata.idProduct);
    this.firebaseService.deleteFunctionality(rowdata, '/vachnhuadanpla');
  }
  public openNotication(): any{
    this.isCheckNotication = false;
  }
  public closeNotication(): any{
    this.isCheckNotication = true;
  }
  public returnCheckNotication(data: any): any{
    this.temp = data;
  }
  public showDataTimeout(data1: any): any{
    console.log(data1);
    return data1;
  }
  public sortABC(): any{
    // tslint:disable-next-line:only-arrow-functions typedef
    this.dataSearchKeyword =  this.dataSearchKeyword.sort(function(a, b){
      if (a.id.name.toLowerCase() < b.id.name.toLowerCase()) { return -1; }
      if (a.id.name.toLowerCase() > b.id.name.toLowerCase()) { return 1; }
      return 0;
    });
  }
  public sortStar(): any{
    // tslint:disable-next-line:only-arrow-functions typedef
    this.dataSearchKeyword =  this.dataSearchKeyword.sort(function(a, b){
      if (a.star.number < b.star.number) { return -1; }
      if (a.star.number > b.star.number) { return 1; }
      return 0;
    }).reverse();
  }
  public sortDiscount(): any{
    // tslint:disable-next-line:only-arrow-functions typedef
    this.dataSearchKeyword = this.dataSearchKeyword.sort(function(a, b){
      if (a.discount.number < b.discount.number) { return -1; }
      if (a.discount.number > b.discount.number) { return 1; }
      return 0;
    });
  }
  public searchKeyword(keyword: string): any{
    console.log(keyword);
    this.dataSearchKeyword = this.dataTableCustomer.filter(item => {
      if (this.dataServicesService.removeDauTV(item.id.name).toLowerCase().match(keyword)){
        return item;
      }
    });
  }
  public showAll(): any{
    this.dataSearchKeyword = this.dataTableCustomer;
  }

}
