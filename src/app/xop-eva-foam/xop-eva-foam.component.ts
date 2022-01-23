import { Component, OnInit } from '@angular/core';
import {DataServicesService} from '../services/data-services.service';
import {FirebaseServiceService} from '../services/firebase-service.service';

@Component({
  selector: 'app-xop-eva-foam',
  templateUrl: './xop-eva-foam.component.html',
  styleUrls: ['./xop-eva-foam.component.scss']
})
export class XopEvaFoamComponent implements OnInit {

  constructor(public dataServicesService: DataServicesService, public firebaseService: FirebaseServiceService) {
    this.dataServicesService.checkUrlAdmin = this.dataServicesService.checkUrl();
  }
  public dataItemProductTotal: any;
  public dataXopPeFoamEva: any[] = [
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
  page = 1;
  public itemOfPage = 10;
  public itemOfPageArr = [8, 12, 16, 20, 24];
  public chooseItemOfPage = this.itemOfPageArr[0];
  public priceSortArr = [
    {name: 'Giá: Thấp đến Cao', keyword: 'low'},
    {name: 'Giá: Cao đến Thấp', keyword: 'high'}
  ];
  public choosePriceSortArr = this.priceSortArr[0];
  ngOnInit(): void {
    this.firebaseService.getdata().then(res => {
      this.dataItemProductTotal = res;
      this.dataXopPeFoamEva.splice(0, this.dataXopPeFoamEva.length);
      this.dataXopPeFoamEva = (this.dataItemProductTotal[2]);
    });
    console.log(this.chooseItemOfPage);
  }
  public popular(): any{
  }
  public sortBestSales(): any {
    // tslint:disable-next-line:only-arrow-functions typedef
    this.dataXopPeFoamEva = this.dataXopPeFoamEva.sort(function(item1, item2){
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
    // tslint:disable-next-line:only-arrow-functions typedef
    this.dataXopPeFoamEva = this.dataXopPeFoamEva.sort(function(item1, item2){
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

}
