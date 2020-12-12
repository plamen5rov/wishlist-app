import { Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Gift } from './gift.module';
import { map } from 'rxjs/operators';

@Injectable()
export class GiftService {

  giftChanged = new Subject<Gift>();
  giftsChanged = new Subject<Gift[]>();
  myGiftsChanged = new Subject<Gift[]>();
  private availableGifts: Gift[] = [];
  private giftAdded: Gift;

  constructor(private db: AngularFirestore) {}
  
  // fetchAvailableGifts() {
  //   this.db
  //     .collection('all-gifts')
  //     .snapshotChanges()
  //     .map(docArray => {
  //       return docArray.map(doc => {
  //         return {
  //           id: doc.payload.doc.id,
  //           name: doc.payload.doc.data()['name'],
  //           occasion: doc.payload.doc.data()['occasion'],
  //           description: doc.payload.doc.data()['description'],
  //           date: doc.payload.doc.data()['date'],
  //           price: doc.payload.doc.data()['price'],
  //           imageUrl: doc.payload.doc.data()['imageUrl'],
  //           booked: doc.payload.doc.data()['booked'],
            
  //         };
  //       });
  //     })
  //     .subscribe((exercises: Gift[]) => {
  //       this.availableGifts = exercises;
  //       this.giftsChanged.next([...this.availableGifts]);
  //     });
  // }

  // fffaddNewGift(){
    
  //   this.addDataToDatabase({
  //     ...this.giftAdded
  //   });
  //   this.giftAdded = null;
  //   this.giftChanged.next(null);
  // }
  
  addNewGift(gift: Gift) {
    this.db.collection('my-gifts').add(gift);
  }
}
