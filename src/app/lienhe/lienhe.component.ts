import {Component, OnInit, ViewChild} from '@angular/core';
import {DataServicesService} from '../services/data-services.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import {FirebaseServiceService} from '../services/firebase-service.service';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-lienhe',
  templateUrl: './lienhe.component.html',
  styleUrls: ['./lienhe.component.scss']
})
export class LienheComponent implements OnInit {
  infoCustomerForm: FormGroup| any;
  public linkmap: any;
  public dataContentLienhe: any;
  constructor(public dataServicesService: DataServicesService, public formBuilder: FormBuilder, public domSanitizer: DomSanitizer,
              public firebaseService: FirebaseServiceService, public angulardb: AngularFireDatabase) {
    this.dataServicesService.checkUrlAdmin = this.dataServicesService.checkUrl();
    this.firebaseService.readFunctionalityObject('/lienhe').subscribe((res: any) => {
      this.dataContentLienhe = res;
      this.linkmap = this.domSanitizer.bypassSecurityTrustResourceUrl(res.mapLink);
    });
  }

  ngOnInit(): void {
    this.infoCustomerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phone: ['', [Validators.minLength(10), Validators.required]],
      content: ['', Validators.required]
    });
  }
  public onSubmit(): any{
    // console.log(this.infoCustomerForm.value);
    alert('Bạn đã gửi yêu cầu thành công !');
    this.infoCustomerForm.reset();
  }
}

