import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  //Defining 5 trainers w teams and items
  private registry = signal([

    {//1 record in my registry
      name: 'Ash Ketchum',
      team: ['Pikachu', 'Charizard'],
      items: ['Light Ball', 'Charizardite']
    },

    {
      name: 'Misty',
      team: ['Starmie', 'Psyduck', 'Gyarados'],
      items: ['Mystic Water', 'None', 'Gyaradosite']
    }//add 3 more trainers later

  ]);

  //expose signal as read-only
  trainers = this.registry.asReadonly();
}
