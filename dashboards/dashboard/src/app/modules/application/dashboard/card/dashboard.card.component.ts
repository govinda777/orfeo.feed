import { Component, OnInit } from '@angular/core';
import { DashboardCard } from './dashboard.card';


@Component({
  selector: 'app-dashboard.card',
  templateUrl: './dashboard.card.component.html',
  styleUrls: ['./dashboard.card.component.scss']
})
export class DashboardCardComponent implements OnInit {

  model = {} as DashboardCard;

  constructor() { }

  ngOnInit(): void {
  }

}
