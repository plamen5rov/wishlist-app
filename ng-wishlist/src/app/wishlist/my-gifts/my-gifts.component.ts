import { GiftService } from './../gift.service';
import { Gift } from './../gift.module';
import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-gifts',
  templateUrl: './my-gifts.component.html',
  styleUrls: ['./my-gifts.component.css']
})
export class MyGiftsComponent implements OnInit, AfterViewInit, OnDestroy {

  displayedColumns: string [] = 
  ["name", "occasion", "description", "price", "author"];

  dataSource = new MatTableDataSource<Gift>();

  @ViewChild(MatSort, { static: false }) sort: MatSort;

  private exChangedSubscription: Subscription;

  constructor(private giftService: GiftService) { }

  ngOnInit() {
   this.exChangedSubscription = 
   this.giftService.myGiftsChanged.subscribe(
      (gifts: Gift[]) => 
      {this.dataSource.data = gifts;}
    )
    this.giftService.fetchMyGifts();
    //console.log('Data source:',this.dataSource.data);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(){
    this.exChangedSubscription.unsubscribe();
}
}
