import { Injectable } from '@angular/core';

import { DashboardCardComponent } from './card/items.component';
import { DashboardCard } from './card/card';
import { CARD } from './card/mock-card';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  card: DashboardCard;
  constructor() {
    this.card = new DashboardCard;
   }

  getCard(): DashboardCard {
    this.card = CARD;
    
    return this.card;
  }

}
