import {Component, Inject, OnInit} from '@angular/core';
import {Router, Event, NavigationEnd, RouterModule} from '@angular/router';
import {combineAll, filter, finalize} from 'rxjs/operators';
import {DataServicesService} from './services/data-services.service';
import {FirebaseServiceService} from './services/firebase-service.service';
import {BehaviorSubject, combineLatest, forkJoin, merge, Observable} from 'rxjs';
import {getLocaleFirstDayOfWeek} from '@angular/common';
import firebase from 'firebase';
import functions = firebase.functions;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ktpackhsn';
  public productArr: any[] = [];
  public products: any;
  public temp: any[] = [];
  public dataTableCustomer: any[] = [];
  data$ = new BehaviorSubject<any>(null);
  // tslint:disable-next-line:typedef
  constructor(public dataServicesService: DataServicesService, public firebaseService: FirebaseServiceService,
  ) {
    // console.log(window.location.href);
  }
  public temp1: any = '';
  // tslint:disable-next-line:typedef
  public ngOnInit() {
  }
  public show(): any{
    console.log(this.temp1);
  }
  public getAllCustomer(): Observable<any> {
    return this.firebaseService.readFunctionalityList('/thungnhuadanpla');
  }
  public getALlData(): any {
    return this.data$.getValue();
  }
  public scrollTop(): any{
    window.scrollTo(0, 0);
  }
}



