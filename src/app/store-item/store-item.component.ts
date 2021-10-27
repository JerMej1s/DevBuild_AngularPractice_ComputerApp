import { Component, Input, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { Item } from '../item';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css']
})
export class StoreItemComponent implements OnInit {

  @Input() theItem?: Item;

  constructor(private inventory: InventoryService) { }

  ngOnInit(): void {
  }

  deleteItem() {
    if(this.theItem) {
      this.inventory.deleteItem(this.theItem);
    }
  }

}
