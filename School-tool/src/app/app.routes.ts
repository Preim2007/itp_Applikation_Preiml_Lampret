import { Routes } from '@angular/router';

// Die korrekten Imports mit euren echten Klassennamen
import { RollenAuswahl } from './register/rollen-auswahl/rollen-auswahl';
import { SchuelerRegistrierung } from './register/schueler-registrierung/schueler-registrierung';
import { LehrerRegistrierung } from './register/lehrer-registrierung/lehrer-registrierung';
import { Login } from './login/login';

export const routes: Routes = [
  // Die Haupt-Registrierungsseite zeigt jetzt zuerst die Auswahl
  { path: 'register', component: RollenAuswahl },

  // Die Unterseiten für Schüler und Lehrer
  { path: 'register/schueler', component: SchuelerRegistrierung },
  { path: 'register/lehrer', component: LehrerRegistrierung },

  { path: 'login', component: Login },

  // Falls die Adresse leer ist (Startseite)
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
