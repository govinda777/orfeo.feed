import { Component, OnInit } from '@angular/core';
import { TutorialService } from '../tutorial.service';
import { DashboardCard } from './card';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-dashboard-card',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class DashboardCardComponent implements OnInit {

  model = new DashboardCard;
  loaded: boolean;
  plus: boolean;
  old: number;
  items = ['First', 'Second', 'Third'];

  people: any[] = [
    {
      "name": "Douglas  Pace"
    },
    {
      "name": "Mcleod  Mueller"
    },
    {
      "name": "Day  Meyers"
    },
    {
      "name": "Aguirre  Ellis"
    },
    {
      "name": "Cook  Tyson"
    }
  ];

  constructor(
    private service: TutorialService) {
    this.loaded = false;
    this.plus = true;
    this.old = 4;
  }

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.loaded = false;
    //this.model = this.service.getCard()
  }

  toggle() {
    this.plus = !this.plus;
    return this.plus;
  }

  showOld(indexOld : number) : boolean {
    return !(this.old == indexOld);
  }

}
