import { Component, OnInit } from '@angular/core';
import {DataServicesService} from '../services/data-services.service';
import {Meta, Title} from '@angular/platform-browser';
import {FirebaseServiceService} from '../services/firebase-service.service';
@Component({
  selector: 'app-thungnhua-danpla',
  templateUrl: './thungnhua-danpla.component.html',
  styleUrls: ['./thungnhua-danpla.component.scss']
})
export class ThungnhuaDanplaComponent implements OnInit {
  constructor(public dataServicesService: DataServicesService, public meta: Meta, public firebaseService: FirebaseServiceService) {
    this.dataServicesService.checkUrlAdmin = this.dataServicesService.checkUrl();
    this.meta.addTag({name: 'description', content: 'thung nhua danpla'});
    this.meta.addTag({name: 'keywords', content: 'plastic, thung nhua'});
  }
  page = 1;
  public itemOfPage = 10;
  public itemOfPageArr = [4, 8, 12, 16, 20, 24];
  public chooseItemOfPage = this.itemOfPageArr[1];
  public priceSortArr = [
    {name: 'Giá: Thấp đến Cao', keyword: 'low'},
    {name: 'Giá: Cao đến Thấp', keyword: 'high'}
  ];
  public dataItemProductTotal: any;
  public dataThungnhuaDanpla: any[] = [
    {
      addCart: false,
      typeName: {name: '', id: ''},
      id: {name: '', link: ''},
      img: [{ name: '', link: '' }, { name: '', link: '' }, { name: '', link: '' }, { name: '', link: '' }, ],
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
  public choosePriceSortArr = this.priceSortArr[0];
  ngOnInit(): void {
    this.firebaseService.getdata().then(res => {
      this.dataItemProductTotal = res;
      this.dataThungnhuaDanpla.splice(0, this.dataThungnhuaDanpla.length);
      this.dataThungnhuaDanpla = (this.dataItemProductTotal[0]);
    });
    // console.log(this.dataServicesService.dataProductDetailsList);
    // console.log(this.chooseItemOfPage);
  }
  public popular(): any{
  }
  public sortBestSales(): any {
    // tslint:disable-next-line:only-arrow-functions typedef max-line-length
    this.dataThungnhuaDanpla = this.dataThungnhuaDanpla.sort(function(item1: { sellNumber: { name: any; }; }, item2: { sellNumber: { name: any; }; }){
      const value1 = item1.sellNumber.name;
      const value2 = item2.sellNumber.name;
      if (value1 > value2){
        return -1;
      }
      if (value1 < value2){
        return 1;
      }
      return 0;
    });
  }
  public sortPopular(): any {
    // tslint:disable-next-line:only-arrow-functions typedef max-line-length
    this.dataThungnhuaDanpla = this.dataThungnhuaDanpla.sort(function(item1: { star: { number: any; }; }, item2: { star: { number: any; }; }){
      const value1 = item1.star.number;
      const value2 = item2.star.number;
      if (value1 > value2){
        return -1;
      }
      if (value1 < value2){
        return 1;
      }
      return 0;
    });
  }
  public check(id: any): any{
    return id;
  }
}
