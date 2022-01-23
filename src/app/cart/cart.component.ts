import { Component, OnInit } from '@angular/core';
import {DataServicesService} from '../services/data-services.service';
import {delay} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { init } from 'emailjs-com';
init('user_MvQzHuYMCVX6mLmNGHZmE');
// import './custom.js';
import { FormGroup, FormControl } from '@angular/forms';
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
  public choose = false;
  constructor(public dataServicesService: DataServicesService, public dialog: MatDialog) {
    this.dataServicesService.checkUrlAdmin = this.dataServicesService.checkUrl();
  }

  ngOnInit(): void {

    // this.dataServicesService.dataAddCartItem$.subscribe(item => {
    //   this.dataCart.splice(0, this.dataCart.length);
    //   item.forEach((item1: any) => {
    //     item1.quantity = 1;
    //     this.dataCart.push(item1);
    //     this.counter = this.dataCart.length;
    //     console.log('---------ii---------');
    //     console.log(this.dataCart);
    //     console.log('----------ii--------');
    //   });
    // });
    this.checkBox1();
  }
  public openDialog(): any {
    const dialogRef = this.dialog.open(FormInfoCustomerComponent, {
        panelClass: 'dialog-responsive',
        width: '100%',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  public checkBox1(): any{
    console.log('click checkbox');
    this.dataCartSale.splice(0, this.dataCartSale.length);
    this.dataServicesService.dataCart1.forEach(item5 => {
      console.log('for');
      console.log(item5.checkBoxItem);
      if (item5.checkBoxItem){
        this.dataCartSale.push(item5);
      }
    });
    if (this.dataServicesService.dataCart1.length === this.dataCartSale.length){
      this.choose = true;
    }else{
      this.choose = false;
    }
  }
  public checkbox2(): any{
    setTimeout(() => {
      this.checkBox1();
    }, 200);
  }

}

