import { Gift } from './../gift.module';
import { GiftService } from './../gift.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.css']
})
export class GiftComponent implements OnInit {
  availableGifts: Gift[] = [];
  id:number = Math.floor(Math.random() * 100);
  newGift: Gift;  

  constructor(private giftService: GiftService) { }

  ngOnInit() {
    this.availableGifts = this.giftService.getAvailableGifts();
  }
  onSubmit(form: NgForm){
    this.newGift =
    {
      id: this.id,
      name: form.value.name,
      occasion: form.value.occasion,
      description: form.value.description,
      date: form.value.date,
      price: +form.value.price,
      imageUrl: form.value.imageUrl,

      booked: false,
      author: 'bob@bob.com',
    };

    this.giftService.addGift(this.newGift);
    console.log (this.newGift);
    console.log(this.availableGifts);

  }

}
