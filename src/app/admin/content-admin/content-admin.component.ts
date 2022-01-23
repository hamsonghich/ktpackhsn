import { Component, OnInit } from '@angular/core';
import {AdminComponent} from '../admin.component';
import {MatDialog} from '@angular/material/dialog';
import {FormTintucComponent} from '../../formContent/form-tintuc/form-tintuc.component';
import {FirebaseServiceService} from '../../services/firebase-service.service';
import {TintucModule} from '../../model/tintuc/tintuc.module';

import {AngularFireDatabase} from '@angular/fire/database';
@Component({
  selector: 'app-content-admin',
  templateUrl: './content-admin.component.html',
  styleUrls: ['./content-admin.component.scss']
})
export class ContentAdminComponent implements OnInit {
  constructor(public adminComponent: AdminComponent, public matDialog: MatDialog,
              public firebaseService: FirebaseServiceService, public angulardb: AngularFireDatabase) {
  }

  ngOnInit(): void {
  }
}

