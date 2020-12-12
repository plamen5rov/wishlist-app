import { GiftService } from './../gift.service';
import { Gift } from './../gift.module';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-my-gifts',
  templateUrl: './my-gifts.component.html',
  styleUrls: ['./my-gifts.component.css']
})
export class MyGiftsComponent implements OnInit, AfterViewInit {

  displayedColumns: string [] = ["name", "occasion", "date", "price", "author"];

  dataSource = new MatTableDataSource<Gift>();

  @ViewChild(MatSort) sort: MatSort;

  constructor(private giftService: GiftService) { }

  ngOnInit() {
    // this.dataSource.data = this.giftService.getAvailableGifts();
    // console.log('Data source:',this.dataSource.data);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
