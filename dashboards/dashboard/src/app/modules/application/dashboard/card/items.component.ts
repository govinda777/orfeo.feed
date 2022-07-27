import { Component, OnInit } from '@angular/core';
import { TutorialService } from '../tutorial.service';
import { DashboardCard } from './card';


@Component({
  selector: 'app-dashboard-card',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class DashboardCardComponent implements OnInit {

  model = new DashboardCard;

  loaded: boolean;
  constructor(
    private service: TutorialService) {
    this.loaded = false;
  }

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.loaded = false;
    this.service.getCards()
      .subscribe(
        model => {
          this.model = model as DashboardCard;
          this.loaded = true;
        });
  }
}
