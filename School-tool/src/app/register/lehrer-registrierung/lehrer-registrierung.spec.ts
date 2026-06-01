import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LehrerRegistrierung } from './lehrer-registrierung';

describe('LehrerRegistrierung', () => {
  let component: LehrerRegistrierung;
  let fixture: ComponentFixture<LehrerRegistrierung>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LehrerRegistrierung],
    }).compileComponents();

    fixture = TestBed.createComponent(LehrerRegistrierung);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
