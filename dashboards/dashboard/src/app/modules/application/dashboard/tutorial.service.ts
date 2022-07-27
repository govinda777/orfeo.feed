import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DashboardCard } from './card/card';
import { CARD } from './card/mock-card';

const httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/xml',
      }
    )
  };
  

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  url = '';
  card: DashboardCard;
  constructor(private http: HttpClient) {
    this.card = new DashboardCard;
    this.url = 'https://rss.app/feeds/DTDaQVpFOBsJ2mN2.xml?dfbvdfb';
   }

  getCard(): DashboardCard {
    this.card = CARD;
    
    return this.card;
  }

  getCards(): Observable<object> {
    return this.http.get(this.url, httpOptions);
  }

}
