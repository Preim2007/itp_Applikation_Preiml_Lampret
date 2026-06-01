import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchuelerRegistrierung } from './schueler-registrierung';

describe('SchuelerRegistrierung', () => {
  let component: SchuelerRegistrierung;
  let fixture: ComponentFixture<SchuelerRegistrierung>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchuelerRegistrierung],
    }).compileComponents();

    fixture = TestBed.createComponent(SchuelerRegistrierung);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
