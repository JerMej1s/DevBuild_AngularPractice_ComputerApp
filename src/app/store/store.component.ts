import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { Item } from '../item';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  myinv?: Item[];

  constructor(private inventory: InventoryService) {
    this.myinv = this.inventory.readAllItems();
    console.log(this.myinv);
   }

  ngOnInit(): void {
  }

  debug() {
    console.log(this.inventory.readAllItems());
  }

}
