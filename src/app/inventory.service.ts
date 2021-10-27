import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  items: Item[] = [
    { name: 'Keyboard', price: 25.00, quantity: 5 },
    { name: 'Mouse', price: 15.00, quantity: 15 },
    { name: 'Flashdrive', price: 20.00, quantity: 10 }
  ];

  constructor() { }

  readAllItems(): Item[] {
    return this.items;
  }

  createItem(newItem: Item) {
    this.items.push(newItem);
  }

  updateItem() {

  }

  deleteItem(theItem: Item) {
    let i = this.items.indexOf(theItem);
    if (i > -1) {
      this.items.splice(i, 1);
    }
  }
}
