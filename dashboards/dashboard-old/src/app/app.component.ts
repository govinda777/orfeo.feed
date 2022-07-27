import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WorkerClient, WorkerManager } from 'angular-web-worker/angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  
  result = 0;
  sliderTranslate = 'translateX(0px)';

  private animation = {
    translate: 0,
    rightDirection: true
  };

  constructor() {
    
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    requestAnimationFrame(this.animateFrame.bind(this))
  }

  private animateFrame(): void {
    this.animation.translate = this.animation.rightDirection ?
                                this.animation.translate + 5 :
                                this.animation.translate - 5;

    if (this.animation.translate > (window.innerWidth * 0.2) + 40) {
      this.animation.rightDirection = false;
    } else if (this.animation.translate < 0){
      this.animation.rightDirection = true;
    }
    this.sliderTranslate = `translateX(${this.animation.translate}px)`;
    requestAnimationFrame(this.animateFrame.bind(this));
  }

  async handleLongOperation(): Promise<void> {
   
  }
}
