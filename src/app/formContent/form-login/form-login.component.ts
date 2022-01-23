import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<FormLoginComponent>) { }

  ngOnInit(): void {
  }

}
