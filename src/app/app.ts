import { Component, signal } from '@angular/core';
import { TrainerDisplay } from './trainer-display/trainer-display';

@Component({
  selector: 'app-root',
  imports: [TrainerDisplay],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
