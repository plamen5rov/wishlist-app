import { Gift } from './../gift.module';
import { GiftService } from './../gift.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-gifts',
  templateUrl: './all-gifts.component.html',
  styleUrls: ['./all-gifts.component.css']
})
export class AllGiftsComponent implements OnInit {
  availableGifts: Gift[] = [];
  constructor(private giftService: GiftService) { }

  ngOnInit() {
    // this.availableGifts = this.giftService.getAvailableGifts();
  }

}
