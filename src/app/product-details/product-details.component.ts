import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {DataServicesService} from '../services/data-services.service';
import { DOCUMENT } from '@angular/common';
import {Observable} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FirebaseServiceService} from '../services/firebase-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})

export class ProductDetailsComponent implements OnInit{
  constructor(public activatedRoute: ActivatedRoute, public dataServicesService: DataServicesService,
              @Inject(DOCUMENT) public document: Document,  public router: Router, public firebaseService: FirebaseServiceService,
            ) {
    this.dataServicesService.checkUrlAdmin = this.dataServicesService.checkUrl();
  }
  public dataAddCart: any[] = [];
  public productItem1 = {
  addCart: false,
  typeName: {name: '', id: ''},
  id: {name: '', link: ''},
  img: [{ name: '', link: '' }, ],
  address: {name: ''},
  price: {name: ''},
  sellNumber: {name: ''},
  like: false,
  star: {number: 0},
  discount: {number: 0},
  evaluate: {number: 0},
  description: [
    {
      title: '', content: '',
    },
    {
      title: '', content: '',
    },
    {
      title: '', content: '',
    },
    {
      title: '', content: '',
    },
]
  };
  public booleanCart = {
    addCart: false,
  }; // trang thai show add hide delete
  public checkAdd = false;
  public productItem: Observable<any> | any;
  public id: Observable<any> | any;
  public dataItemProductTotal: any; // giá trị của từng sản phẩm
  ngOnInit(): void {
    // lấy dữ liệu từ firebase về. đã sử dụng bất đồng bộ
      this.firebaseService.getdata().then(res => {
        console.log(res);
        this.dataItemProductTotal = res;
        this.router.events.subscribe((evt) => {
          if (!(evt instanceof NavigationEnd)) {
            return;
          }
          window.scrollTo(0, 0);
        });
        this.activatedRoute.paramMap.subscribe(params => {
          this.id = params.get('id');
          // tslint:disable-next-line:prefer-for-of
          for (let i = 0; i < this.dataItemProductTotal.length ; i++){
            // tslint:disable-next-line:prefer-for-of
            for (let j = 0; j < this.dataItemProductTotal[i].length; j++){
              if (this.dataItemProductTotal[i][j].id.link === this.id){
                this.productItem = this.dataItemProductTotal[i][j];
              }
            }
          }
        });
        console.log(this.dataItemProductTotal);
        this.productItem1 = this.productItem;
        // this.booleanCart = JSON.parse(JSON.stringify(this.productItem.addCart));
      });
      // console.log(this.dataItemProductTotal.length);
      // console.log(this.firebaseService.temp1);

  }
  public clickImg(k: number): any{
    // console.log('da click' + k);
    const  itemBig = document.getElementsByClassName('img-item') as HTMLCollectionOf<HTMLElement>;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < itemBig.length; i++){
      itemBig[i].style.display = 'none';
    }
    const idImg = document.getElementById('idImg' + k) as HTMLElement;
    idImg.style.display = 'block';
    // $('.img-item').css({display: 'none'});
    // $('#idImg' + k).css({display: 'block'});
  }

  public reload(): any {
    this.productItem1 = JSON.parse(JSON.stringify(this.productItem));
    this.booleanCart = JSON.parse(JSON.stringify(this.productItem.addCart));
  }
  public addCart(): any{
    // const addCartBtn = document.getElementsByClassName('addCart')[0];
    // const showOff = document.getElementsByClassName('showOff') as HTMLCollectionOf<HTMLElement>;
    // showOff[0].style.display = 'none';
    if (this.productItem1 !== undefined){
      // alert(this.convertBoolean(this.productItem1.addCart));
      this.productItem1.addCart = true;
      console.log('addCart', this.productItem1.addCart);
      this.dataAddCart.push(this.productItem1);
      // console.log(this.dataAddCart);
      this.dataServicesService.dataAddCartItem$.next(this.dataAddCart);
      // console.log(this.dataServicesService.dataAddCartItem$.getValue());
      console.log('da click addCart');
      console.log('typeof', this.convertBoolean(this.productItem1.addCart));
    }
  }

  public convertBoolean(item: any): boolean{
    if (item.toString() === 'true'){
      return true;
    }
    else { return false; }
  }
}
