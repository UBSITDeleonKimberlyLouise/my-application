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
    },

    {
      name: 'Brock',
      team: ['Onix', 'Geodude', 'Kabutops'],
      items: ['Hard Stone', 'Everstone', 'Focus Band']
    },

    {
      name: 'Lt. Surge',
      team: ['Voltorb', 'Electrode', 'Raichu'],
      items: ['Electric Seed', 'Light Ball', 'Zoom Lens']
    },

    {
      name: 'Erika',
      team: ['Victreebel', 'Tangela', 'Bellossom'],
      items: ['Absorb Bulb', 'Leftovers', 'Mental Herb']
    }

  ]);

  //expose signal as read-only
  trainers = this.registry.asReadonly();
}
