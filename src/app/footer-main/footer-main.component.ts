import { Component, OnInit } from '@angular/core';
import {DataServicesService} from '../services/data-services.service';

@Component({
  selector: 'app-footer-main',
  templateUrl: './footer-main.component.html',
  styleUrls: ['./footer-main.component.scss']
})
export class FooterMainComponent implements OnInit {
  public click = 0;
  constructor(public dataServicesService: DataServicesService) { }

  ngOnInit(): void {
  }
  public raiseClick(): any{
    this.click = this.click + 1;
  }
}

