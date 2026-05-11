import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Falls du Angular 17+ nutzt
  imports: [RouterOutlet,], // Wichtig für die Links!
  templateUrl: './app.html',      // Hier wird das HTML verknüpft
  styleUrl: './app.css'           // HIER wird das CSS verknüpft!
})
export class App {
  protected readonly title = signal('School-tool');
}
