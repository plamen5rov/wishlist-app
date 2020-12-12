import { Gift } from './../gift.module';
import { GiftService } from './../gift.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-gifts',
  templateUrl: './all-gifts.component.html',
  styleUrls: ['./all-gifts.component.css'],
})
export class AllGiftsComponent implements OnInit, OnDestroy {
  availableGifts: Gift[];
  private exChangedSubscription: Subscription;
  constructor(private giftService: GiftService) {}

  ngOnInit() {
    //this.availableGifts = this.giftService.fetchMyGifts();
    this.exChangedSubscription = this.giftService.myGiftsChanged.subscribe(
      (gifts: Gift[]) => {
        this.availableGifts = gifts;
      }
      // this.giftService.fetchMyGifts();}
    );
  }

  ngOnDestroy() {
    this.exChangedSubscription.unsubscribe();
  }
}
