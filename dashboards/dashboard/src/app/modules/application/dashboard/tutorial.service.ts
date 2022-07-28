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
    this.url = 'https://s3.amazonaws.com/govinda.feed/feed.xml';
   }

  getCard(): DashboardCard {
    this.card = CARD;
    
    return this.card;
  }

  getCards(): Observable<object> {
    return this.http.get(this.url, httpOptions);
  }

}
