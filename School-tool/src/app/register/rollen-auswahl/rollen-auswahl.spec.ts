import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollenAuswahl } from './rollen-auswahl';

describe('RollenAuswahl', () => {
  let component: RollenAuswahl;
  let fixture: ComponentFixture<RollenAuswahl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RollenAuswahl],
    }).compileComponents();

    fixture = TestBed.createComponent(RollenAuswahl);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
