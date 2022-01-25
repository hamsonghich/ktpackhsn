import {Component, Inject, OnInit} from '@angular/core';
import {DataServicesService} from '../services/data-services.service';
import {Router} from '@angular/router';
import {FirebaseServiceService} from '../services/firebase-service.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  public imgArr: any[] = [];
  page = 1;
  public itemOfPageArr = [8, 12, 16, 20, 24];
  public priceSortArr = [
    {name: 'Giá: Thấp đến Cao', keyword: 'low'},
    {name: 'Giá: Cao đến Thấp', keyword: 'high'}
  ];
  public chooseItemOfPage = this.itemOfPageArr[0];
  public choosePriceSortArr = this.dataServicesService.currentNameSubject$.getValue();
  public dataSearchMatch = this.dataServicesService.currentNameSubject$.getValue();

  constructor(public dataServicesService: DataServicesService, public router: Router, public firebaseService: FirebaseServiceService) {
    this.dataServicesService.checkUrlAdmin = this.dataServicesService.checkUrl();
  }

  ngOnInit(): void {
    this.firebaseService.readFunctionalityObject('/trangchu').subscribe((res: { content3Title: any; content4Title: any; content5Title: any; content6Title: any; }) => {
      this.imgArr.push(res.content3Title);
      this.imgArr.push(res.content4Title);
      this.imgArr.push(res.content5Title);
      this.imgArr.push(res.content6Title);
    });
  }

  public sortBestSales(): any {
    // console.log('sort best sales');
    // tslint:disable-next-line:typedef only-arrow-functions max-line-length
    this.dataSearchMatch = this.dataSearchMatch.sort(function(item1: { sellNumber: { number: any; }; }, item2: { sellNumber: { number: any; }; }) {
      const value1 = item1.sellNumber.number;
      const value2 = item2.sellNumber.number;
      if (value1 > value2) {
        return -1;
      }
      if (value1 < value2) {
        return 1;
      }
      return 0;
    });
  }

  public sortPopular(): any {
    // console.log('sort popular');
    // tslint:disable-next-line:typedef only-arrow-functions
    this.dataSearchMatch = this.dataSearchMatch.sort(function(item1: { star: { number: any; }; }, item2: { star: { number: any; }; }) {
      const value1 = item1.star.number;
      const value2 = item2.star.number;
      if (value1 > value2) {
        return -1;
      }
      if (value1 < value2) {
        return 1;
      }
      return 0;
    });
  }
  public notFoundBtn(): any{
    this.router.navigateByUrl('/trang-chu');
    window.scrollTo(0, 0);
  }

}
