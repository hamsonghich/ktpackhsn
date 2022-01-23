import {Component, Inject, OnInit} from '@angular/core';
import {DataServicesService} from '../services/data-services.service';
import {DOCUMENT} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-details-more-info',
  templateUrl: './product-details-more-info.component.html',
  styleUrls: ['./product-details-more-info.component.scss']
})
export class ProductDetailsMoreInfoComponent implements OnInit {

  constructor(public dataServicesService: DataServicesService, @Inject(DOCUMENT) document: Document, public router: Router) { }
  public filterList: any;
  public lengthTypeProduct = this.dataServicesService.listHeader.length;
  ngOnInit(): void {
    // console.log('href');
    // console.log(this.router.url);
    let keyWord;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 2; i < this.dataServicesService.listHeader.length - 2; i++) {
      // console.log(this.dataServicesService.listHeader[i].mother.link);
      keyWord = this.dataServicesService.listHeader[i].mother.link.slice(1).replace('danpla', '').replace('Danpla', '');
      // console.log(keyWord);
      if (document.location.href.includes(keyWord)){
        // console.log('true');
        this.filterList = this.dataServicesService.listHeader[i].child;
      }
    }

  }

}
