import { Gift } from './gift.module';
export class GiftService {
  private availableGifts: Gift[] = [
    {
      id: 64644464,
      name: 'Test Gift',
      occasion: 'Birthday',
      description: 'Sample gift',
      date: '22/03/2020',
      price: 22,
      imageUrl:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-family-select-2020?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1604343709000',

      booked: false,
      author: 'bob@bob.com',
    },
  ];

  getAvailableGifts() {
    return this.availableGifts.slice();
  }

  addGift(newGift: Gift) {
    this.availableGifts.push(newGift);
    return this.availableGifts.slice();
  }
}
