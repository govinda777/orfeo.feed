import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard.CardComponent } from './dashboard.card.component';

describe('Dashboard.CardComponent', () => {
  let component: Dashboard.CardComponent;
  let fixture: ComponentFixture<Dashboard.CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dashboard.CardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard.CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
