import { Router } from '@angular/router';
import { Gift } from './../gift.module';
import { GiftService } from './../gift.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.css']
})
export class GiftComponent implements OnInit {
  availableGifts: Gift[] = [];
  ///id:number = Math.floor(Math.random() * 100);
  @Output() newGift: Gift;  
  @Input() user: string;

  constructor(
    private giftService: GiftService, 
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    //this.availableGifts = this.giftService.fetchAvailableGifts();
  }
  onSubmit(form: NgForm){
    this.newGift =
    {
      
      name: form.value.name,
      occasion: form.value.occasion,
      description: form.value.description,
      //date: form.value.date,
      price: +form.value.price,
      imageUrl: form.value.imageUrl,

      booked: false,
      author: this.authService.user,
    };

    console.log ('New gift:',this.newGift);
    this.giftService.addNewGift(this.newGift);
    this.router.navigate(['/all-gifts']);
    

    // this.giftService.addNewGift(this.newGift);
    // console.log (this.newGift);
    // console.log(this.availableGifts);

  }

}
