import { Component, OnInit } from '@angular/core';
import { DashboardCard } from './card';


@Component({
  selector: 'app-dashboard-card',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class DashboardCardComponent implements OnInit {

  model = {} as DashboardCard;

  constructor() { }

  ngOnInit(): void {
  }

}
