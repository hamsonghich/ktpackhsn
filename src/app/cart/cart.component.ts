import {Component, OnInit} from '@angular/core';
import {DataServicesService} from '../services/data-services.service';
import {delay} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';
import emailjs, {EmailJSResponseStatus} from 'emailjs-com';
import {init} from 'emailjs-com';

init('user_MvQzHuYMCVX6mLmNGHZmE');
import {FormGroup, FormControl} from '@angular/forms';
import {FormInfoCustomerComponent} from '../form-info-customer/form-info-customer.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public counter = 0;
  public dataCart: any[] = [];
  public dataCartSale: any[] = [];
  public choose = true;

  constructor(public dataServicesService: DataServicesService, public dialog: MatDialog) {
    this.dataServicesService.checkUrlAdmin = this.dataServicesService.checkUrl();
    this.checkBoxALL(this.choose);
    this. testDataCheckbox();
  }

  ngOnInit(): void {
  }

  public openDialog(): any {
    const dialogRef = this.dialog.open(FormInfoCustomerComponent, {
      panelClass: 'dialog-responsive',
      width: '80%',
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      // console.log(`Dialog result: ${result}`);
    });
  }

  public testDataCheckbox(): any {  // su dung de loc du lieu checkbox
    setTimeout(() => {
      this.dataCartSale.splice(0, this.dataCartSale.length);
      this.dataServicesService.dataCartUnique.forEach(item => {
        console.log(item.checkBox);
        if (item.checkBox) {
          this.dataCartSale.push(item);
        }
      });
      console.log(this.dataCartSale);
      this.dataServicesService.dataSales$.next(this.dataCartSale);
    }, 250);
  }

  public checkBoxALL(bool: boolean): any {
    setTimeout(() => {
      console.log('boolean: ' + bool);
      if (bool) {
        this.dataServicesService.dataCartUnique.forEach(item => {
          item.checkBox = true;
        });
      } else {
        this.dataServicesService.dataCartUnique.forEach(item => {
          item.checkBox = false;
        });
      }
    }, 200);
    this.testDataCheckbox();
  }
}

