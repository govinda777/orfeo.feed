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

  constructor(
    private service: TutorialService) {
    this.loaded = false;
    this.plus = true;
    this.old = 2;
  }

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.loaded = false;
    //this.model = this.service.getCard()
  }

  toggle() {
    console.log("aqui")
    this.plus = !this.plus;
    return this.plus;
  }

}
