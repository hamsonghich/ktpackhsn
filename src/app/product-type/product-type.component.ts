import {Component, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, ParamMap} from '@angular/router';
import {DataServicesService} from '../services/data-services.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {empty} from 'rxjs/internal/Observer';
import {FirebaseServiceService} from '../services/firebase-service.service';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.scss']
})
export class ProductTypeComponent implements OnInit{
  private id: Observable<any> | any;
  public filter$: Observable<any> | undefined;
  page = 1;
  public itemOfPage = 10;
  public itemOfPageArr = [12, 16, 20, 24];
  public chooseItemOfPage = this.itemOfPageArr[0];
  public priceSortArr = [
    {name: 'Giá: Thấp đến Cao', keyword: 'low'},
    {name: 'Giá: Cao đến Thấp', keyword: 'high'}
  ];
  public choosePriceSortArr = this.priceSortArr[0];
  public productType: any[] = [
    {
      addCart: false,
      typeName: {name: '', id: ''},
      id: {name: '', link: ''},
      img: [{ name: '', link: '' }, ],
      address: {name: ''},
      price: {name: ''},
      sellNumber: {number: 0},
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
    },
  ];
  public dataItemProductTotal: any; // giá trị của từng sản phẩm
  // tslint:disable-next-line:max-line-length
  constructor(public activatedRoute: ActivatedRoute, public dataServicesService: DataServicesService, public firebaseService: FirebaseServiceService,
              ) { this.dataServicesService.checkUrlAdmin = this.dataServicesService.checkUrl(); }

  ngOnInit(): void {
    this.firebaseService.getdata().then(res => {
      this.dataItemProductTotal = res;
      this.activatedRoute.paramMap.subscribe(params => {
        this.id = params.get('id');
        // console.log('id: ' + this.id);
        this.productType.splice(0, this.productType.length);
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.dataItemProductTotal.length ; i++){
          // tslint:disable-next-line:prefer-for-of
          for (let j = 0; j < this.dataItemProductTotal[i].length; j++){
            if (this.dataItemProductTotal[i][j].typeName.name === this.id){
              this.productType.push(this.dataItemProductTotal[i][j]);
            }
          }
        }
      });
    });
  }
  public getProductDetailsId(): any {
  }
  public exit(): any {
  }



}
