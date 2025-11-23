import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ganopoly-express');

  topRow = [
  { name: 'Départ', price: 0 },
  { name: 'Propriété 1', price: 100 },
  { name: 'Propriété 2', price: 120 },
  { name: 'Chance', price: 0 },
  { name: 'Propriété 3', price: 140 },
  { name: 'Bonus', price: 100 },
  { name: 'Propriété 4', price: 160 },
  { name: 'Taxe', price: 50 }
];

rightColumn = [
  { name: 'Propriété 5', price: 180 },
  { name: 'Chance', price: 0 },
  { name: 'Propriété 6', price: 200 },
  { name: 'Prison', price: 0 },
  { name: 'Propriété 7', price: 220 },
  { name: 'Bonus', price: 100 },
  { name: 'Propriété 8', price: 240 }
];

bottomRow = [
  { name: 'Taxe', price: 100 },
  { name: 'Propriété 9', price: 260 },
  { name: 'Chance', price: 0 },
  { name: 'Propriété 10', price: 280 },
  { name: 'Bonus', price: 150 },
  { name: 'Propriété 11', price: 300 },
  { name: 'Taxe', price: 150 },
  { name: 'Propriété 12', price: 320 }
];

leftColumn = [
  { name: 'Chance', price: 0 },
  { name: 'Propriété 13', price: 340 },
  { name: 'Prison', price: 0 },
  { name: 'Propriété 14', price: 360 },
  { name: 'Bonus', price: 100 },
  { name: 'Propriété 15', price: 380 },
  { name: 'Propriété 16', price: 400 }
];

}
