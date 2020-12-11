import { Gift } from './gift.module';
export class GiftService {
  private availableGifts: Gift[] = [
    {
      id: 64644464,
      name: 'Test Gift',
      occasion: 'Birthday',
      description: 'Sample gift',
      date: '25/12/2020',
      price: 22,
      imageUrl:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-family-select-2020?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1604343709000',

      booked: false,
      author: 'bob@bob.com',
    },
    {
      id: 4343434,
      name: "Cat's Cradle",
      occasion: 'Christmas',
      description: 'Book',
      date: '31/12/2020',
      price: 15,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/41GH96RnmqL._SX326_BO1,204,203,200_.jpg',
      booked: false,
      author: 'peter@peter.com',
    }
  ];

  getAvailableGifts() {
    return this.availableGifts.slice();
  }

  addGift(newGift: Gift) {
    this.availableGifts.push({
      ...newGift});
    return this.availableGifts.slice();
  }
}
