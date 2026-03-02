import { Component, inject } from '@angular/core';
import { TrainerService } from '../trainer-service';
TrainerService

@Component({
  selector: 'app-trainer-display',
  imports: [],
  templateUrl: './trainer-display.html',
  styleUrl: './trainer-display.css',
})
export class TrainerDisplay {
  trainerService = inject(TrainerService);
}
