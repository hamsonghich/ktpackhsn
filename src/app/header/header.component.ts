import {Renderer2, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {DataServicesService} from '../services/data-services.service';
import {Router} from '@angular/router';
import {FormThungnhuadanplaComponent} from '../formContent/form-thungnhuadanpla/form-thungnhuadanpla.component';
import {MatDialog} from '@angular/material/dialog';
import {FormLoginComponent} from '../formContent/form-login/form-login.component';
import {FirebaseServiceService} from '../services/firebase-service.service';
interface DataSocial{
  facebook: '';
  messenger: '';
  zalo: '';
  map: '';
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // tslint:disable-next-line:align
  @ViewChild('container-listMenuTop') containerListMenuTop: ElementRef | any;

  public counter = 0;
  public dataCart: any[] = [];
  public dataSearchKeyword: any[] = [];
  public dataSearchMatch: any[] = [];
  public linkImgLogo: any;
  public dataSocial: DataSocial|any;
  myControl = new FormControl();
  options  = this.dataServicesService.listHeader.map((item) => {
    return item.mother;
  });
  filteredOptions: Observable<string[]> | any;
  // tslint:disable-next-line:max-line-length
  constructor(public dataServicesService: DataServicesService, public router: Router, public dialog: MatDialog, public firebaseService: FirebaseServiceService,
              public render: Renderer2) {
    this.dataServicesService.dataSearchHeader1 = this.filteredOptions;
    this.dataServicesService.key = this.myControl.value;
    // console.log('value --');
    // console.log(this.myControl.value)
    this.getDataSocial();
    this.firebaseService.listKeywordSearch();
    this.firebaseService.readFunctionalityObject('/trangchu').subscribe((res: { imgLogo: any; }) => {
      this.linkImgLogo = res.imgLogo;
    });
  }
  ngOnInit(): void {
    this.dataServicesService.dataAddCartItem$.subscribe(dem => {
      this.dataCart.splice(0, this.dataCart.length);
      dem.forEach((item1: any) => {
        this.dataCart.push(item1);
        this.counter = this.dataCart.length;
      });
    });
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  public height(): any{
    const heightValue =  document.getElementById('cdk-overlay-0') as HTMLElement;
    return heightValue.style.height;
  }
  private _filter(value: string): any[]{
    const filterValue = value.toLowerCase();
    // console.log(filterValue);
    console.log('res2', this.firebaseService.dataSearchHeader);
    return this.firebaseService.dataSearchHeader.filter((item1: { name: string; }) =>
      this.removeDauTV(item1.name).toLowerCase().includes(filterValue));
  }

  public getInputValue(): any {
    this.dataSearchKeyword.splice(0, this.dataSearchKeyword.length);
    this.dataSearchMatch.splice(0, this.dataSearchMatch.length);
    this.firebaseService.getdata().then((res: any) => {
      res.forEach((item: any[]) => {
        item.forEach((item1: any) => {
          const obj = JSON.parse(JSON.stringify(item1));
          // tslint:disable-next-line:max-line-length
          if (this.dataServicesService.removeDauTV(obj.id.name).includes(this.dataServicesService.removeDauTV(this.myControl.value.toLowerCase()))){
            // console.log(true);
            this.dataSearchMatch.push(item1);
          }
        });
      });
    });
    this.dataServicesService.currentNameSubject$.next(this.dataSearchMatch);
    this.router.navigateByUrl(`/search-result`, );
  }
  public removeDauTV(str: string): any{
    str = str.toString().replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, 'a');
    str = str.toString().replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, 'a');
    str = str.toString().replace(/??|??|???|???|???|??|???|???|???|???|???/g, 'e');
    str = str.toString().replace(/??|??|???|???|??/g, 'i');
    str = str.toString().replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, 'o');
    str = str.toString().replace(/??|??|???|???|??|??|???|???|???|???|???/g, 'u');
    str = str.toString().replace(/???|??|???|???|???/g, 'y');
    str = str.toString().replace(/??/g, 'd');
    str = str.toString().replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, 'A');
    str = str.toString().replace(/??|??|???|???|???|??|???|???|???|???|???/g, 'E');
    str = str.toString().replace(/??|??|???|???|??/g, 'I');
    str = str.toString().replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, 'O');
    str = str.toString().replace(/??|??|???|???|??|??|???|???|???|???|???/g, 'U');
    str = str.toString().replace(/???|??|???|???|???/g, 'Y');
    str = str.toString().replace(/??/g, 'D');
    // Combining Diacritical Marks
    str = str.toString().replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // huy???n, s???c, h???i, ng??, n???ng
    str = str.toString().replace(/\u02C6|\u0306|\u031B/g, ''); // m?? ?? (??), m?? ??, m?? ?? (??)
    return str.toLowerCase();
  }
  public hideAutoComplete(): any{
    const classAutoCompete = document.getElementsByClassName('mat-autocomplete-panel')[0] as HTMLElement;
    return classAutoCompete.style.display = 'none';
  }

  public login(): any{
    this.dialog.open(FormLoginComponent, {
      height: '400px', width: '350px'
    });
  }
  public getDataSocial(): any{
    this.firebaseService.readFunctionalityObject('/social').subscribe((res: any) => {
      this.dataSocial = res;
    });
  }
  public toggleMenu(): any{
    document.getElementsByClassName('container-listMenuTop')[0].classList.toggle('active');
  }
}
