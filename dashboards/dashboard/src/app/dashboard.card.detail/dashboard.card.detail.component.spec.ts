import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard.Card.DetailComponent } from './dashboard.card.detail.component';

describe('Dashboard.Card.DetailComponent', () => {
  let component: Dashboard.Card.DetailComponent;
  let fixture: ComponentFixture<Dashboard.Card.DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dashboard.Card.DetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard.Card.DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
